

'use client';

import { VStack, Text, HStack } from '@chakra-ui/react';
import OfferTab from './offer-tab';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Footer from './footer';
import { WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';
import AudianceTab from './audiance-tab';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

export default function Home() {
    const wallet = useWallet()
    const [isMobile, setIsMobile] = useState(false);
    const [tabXY, setTabXY] = useState(['1200px', '1200px']);
    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize",updateDimensions);
    }, []);
    const updateDimensions = () => {
        const iw = window.innerWidth
        setIsMobile(iw < 850)
        setTabXY(iw < 850 ? ['375px','450px'] : ['1000px', '1000px'])
    }
    return (
        <VStack paddingY={3} >
            <HStack paddingTop={4} justifyContent={'space-evenly'} spacing={50}>
                <WalletButton />
                <ClusterUiSelect />
            </HStack>
            <Text fontSize={'5xl'}
                fontWeight="bold"
                bgGradient="linear(to-l, #9945FF, #14F195)"
                bgClip="text"
                css={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
                }}
            >Onnyx</Text>
            <Text fontSize={'xl'}>Web3 User Data Hub</Text>
            {wallet.publicKey &&
                <Tabs  variant='enclosed' height={'100%'}>
                    <TabList justifyContent={'space-evenly'}>
                        <Tab _selected={{ color: 'white', bg: '#641ae6' }}>User Analysis</Tab>
                        <Tab _selected={{ color: 'white', bg: '#641ae6' }}>Offers</Tab>
                        <Tab _selected={{ color: 'white', bg: '#641ae6' }}>About Onnyx</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel height={tabXY[0]} width={tabXY[1]}>
                            <AudianceTab isMobile={isMobile}/>
                        </TabPanel >
                        <TabPanel height={tabXY[0]} width={tabXY[1]}>
                            <OfferTab isMobile={isMobile}/>
                        </TabPanel>
                        <TabPanel height={tabXY[0]} width={tabXY[1]}>
                            <p>About</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            }
            <Footer />
        </VStack>
    );
    }
