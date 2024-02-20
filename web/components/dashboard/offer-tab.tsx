'use client';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { AppHero } from '../ui/ui-layout';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Offer from './offer';

const campaigns: { label: string, link: string, image: string, copy: string }[] = [
  { 
    label: 'Tensor Marketplace', 
    link: 'https://www.tensor.trade/', 
    image: 'https://pbs.twimg.com/profile_banners/1507082675827494912/1706801849/1500x500', 
    copy: "Solana's Leading NFT Marketplace" 
  },
  { 
    label: 'GenesysGo',
    link: 'https://t.co/g8tGFfe5Qg',
    image: 'https://pbs.twimg.com/profile_banners/1385673473213624321/1703791206/1500x500',
    copy: 'Decentralized Storage on Solana' 
  },
  { 
    label: 'Solarplex', 
    link: 'https://t.co/l4Ts47ECJN',
    image: 'https://pbs.twimg.com/media/GGUm7x-bMAEbik_?format=jpg&name=small',
    copy: "Solarplex is a social marketplace that helps creators build authentic relationships with their audience."
  }
];

export default function OfferTab() {
  // TODO state management for offers
  return (
      <HStack overflowX="scroll" width={"385px"} spacing={8}>
        {campaigns.map(({ label, link, image, copy }) => (
          <Box width={'380px'}>
            <Offer label={label} link={link} image={image} copy={copy}/>
          </Box>
        ))}
      </HStack>
  );
}
