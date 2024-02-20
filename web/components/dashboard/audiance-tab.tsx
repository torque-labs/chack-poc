'use client';

import { Box, HStack, VStack } from '@chakra-ui/react';
import { AppHero } from '../ui/ui-layout';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Offer from './offer';
import Audiance from './audiance';

const audiances:any[] = [
  { 
    label: 'NFT Degen', 
    image: '/NFT_degen.png', 
    copy: "Your NFT trades have been among the most profitable of the ecosystem." 
  },
  { 
    label: 'Shit Coiner',
    image: '/shit_coiner.png',
    copy: 'Your shit coin trades are off the charts.' 
  },
  { 
    label: 'Blue Chip Holder', 
    image: '/blue_chip.png',
    copy: "You hold Blue Chip NFTs."
  }
];

export default function AudianceTab() {
  // TODO state management for user's audiances
  return (
      <VStack overflowY="scroll" height={"450px"} spacing={8}>
        {audiances.map(({ label, image, copy }) => (
          <Box >
            <Audiance label={label} image={image} copy={copy}/>
          </Box>
        ))}
      </VStack>
  );
}
