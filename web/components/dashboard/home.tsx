'use client';

import { VStack, Text, Flex, useBreakpointValue, Box, Skeleton } from '@chakra-ui/react';
import OfferTab from './offer-tab';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Footer from './footer';
import { WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';
import AudienceTab from './audience-tab';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { getUserData, identify } from '../lib/onnyx-backend';

export default function Home() {
  // wallet
  const wallet = useWallet();
  const [identifyPayload, setIdentifyPayload] = useState({}); // can potentially remove
  const [siws, setSiws] = useState({});
  const [offers, setOffers] = useState([]);
  const [audiences, setAudiences] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    (async () => {
        if (!wallet || !wallet.publicKey || !wallet.connected) {return;}
        setFetching(true);
        const {data:{payload: input}} = await identify();
        const output = await wallet!.signIn(input);
        setSiws({input, output})
        // const auds = await getAudiences(wallet.publicKey.toString())
        const userData = await getUserData(wallet.publicKey.toString());
        console.log({userData});
        setAudiences(userData.audiences);
        setOffers(userData.offers);
        
        setFetching(false);
    })();
  }, [wallet?.connected, (wallet.publicKey?.toString() + wallet.connected.toString())]);

  // responsive UI
  const [isMobile, setIsMobile] = useState(false);
  const [tabXY, setTabXY] = useState(['1200px', '1200px']);
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    const iw = window.innerWidth;
    setIsMobile(iw < 850);
    setTabXY(iw < 850 ? ['375px', '100%'] : ['1000px', '1000px']);
  };

  const layout = useBreakpointValue({ base: 'mobile', md: 'desktop' });

  return (
    <VStack
      paddingY={3}
      spacing={4}
      maxWidth={'100vw'}
      margin="auto"
      pb={2}
    >
        {!fetching && layout === 'desktop' ? (
            <Flex
            width="full"
            justifyContent="space-between"
            alignItems="center"
            paddingX={4}
            >
            <Flex align="center" gap={4}>
                <Text
                fontSize={'5xl'}
                fontWeight="bold"
                bgGradient="linear(to-l, #9945FF, #14F195)"
                bgClip="text"
                css={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                >
                Onnyx
                </Text>
                <Text fontSize={'xl'}>Web3 User Data Hub</Text>
            </Flex>
            <WalletButton />
            </Flex>
        ) : (
            <>
            <Flex
                paddingTop={1}
                paddingBottom={2}
                justifyContent="space-around"
                width="full"
                gap={1}
            >
                <Text
                fontSize={'2xl'}
                fontWeight="bold"
                bgGradient="linear(to-l, #9945FF, #14F195)"
                bgClip="text"
                css={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                >
                Onnyx
                </Text>
                <WalletButton />
                {/* <ClusterUiSelect /> */}
            </Flex>
            </>
        )}
        {wallet.publicKey && (
            <Tabs variant="enclosed" height={'100%'} width={'100%'}>
            <TabList justifyContent={'space-around'}>
                <Tab _selected={{ color: 'white', bg: '#641ae6' }}>
                Audiences
                </Tab>
                <Tab _selected={{ color: 'white', bg: '#641ae6' }}>Offers</Tab>
            </TabList>

            <TabPanels>
                <VStack>
                    <TabPanel height={tabXY[0]} width={tabXY[1]} >
                        <AudienceTab isMobile={isMobile} audiences={audiences} fetching={fetching}/>
                    </TabPanel>
                </VStack>
                <VStack>
                    <TabPanel height={tabXY[0]} width={tabXY[1]} >
                        <OfferTab isMobile={isMobile} siws={siws} fetching={fetching} offers={offers}/>
                    </TabPanel>
                </VStack>
            </TabPanels>
            </Tabs>
        )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="full"
      >
        {!wallet.publicKey &&
            <VStack paddingTop={15}>
                <Text fontSize={'6xl'}><b><i>Onnyx</i></b></Text>
                <Text fontSize={'2xl'}>Solana's User Data Layer</Text>
            </VStack>
        }
        <Footer />
      </Box>
    </VStack>
  );
}
