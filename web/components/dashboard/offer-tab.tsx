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

// todo move this to a better file location
export const scrollerStyle = {
  '&::-webkit-scrollbar': {
    width: '4px',
    borderRadius: '8px',
    backgroundColor: `#14F195`,
    scrollbarWidth: 'auto'
  },
  '&::-webkit-scrollbar-thumb': {
    width: '4px',
    borderRadius: '8px',
    backgroundColor: `#9945FF`,
    scrollbarWidth: 'auto'
  },
}

export default function OfferTab({isMobile}:any) {
  // TODO state management for offers
  return (
      <HStack 
        overflowX="scroll" 
        spacing={5} 
        paddingX={10}
        paddingY={10}
        justifyContent={'space-between'}
        sx={scrollerStyle}
      >
        {campaigns.map(({ label, link, image, copy }) => (
          <Box width={'330px'}>
            <Offer label={label} link={link} image={image} copy={copy}/>
          </Box>
        ))}
      </HStack>
  );
}
