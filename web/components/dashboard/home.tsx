

'use client';

import { VStack, Text, HStack,  } from '@chakra-ui/react';
import { AppHero } from '../ui/ui-layout';
import OfferTable from './offer-table';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Footer from './footer';
import { WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';

export default function Home() {
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
        <Tabs width={'400px'} paddingBottom={'14'} variant='enclosed' >
            <TabList justifyContent={'space-evenly'}>
                <Tab _selected={{ color: 'white', bg: '#641ae6' }}>User Analysis</Tab>
                <Tab _selected={{ color: 'white', bg: '#641ae6' }}>Offers</Tab>
                <Tab _selected={{ color: 'white', bg: '#641ae6' }}>About Onnyx</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>Audiances</p>
                </TabPanel>
                <TabPanel>
                    <OfferTable />
                </TabPanel>
                <TabPanel>
                    <p>About</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        <Footer />
    </VStack>
  );
}
