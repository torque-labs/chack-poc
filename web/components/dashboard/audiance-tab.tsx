'use client';

import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import Audiance from './audiance';
import { scrollerStyle } from './offer-tab';

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

export default function AudianceTab({isMobile}:any) {
  // TODO state management for user's audiances
  return (
      <VStack>
        <Stack 
          direction={isMobile ? 'column' : 'row'} 
          overflowX={isMobile ? 'hidden' : 'scroll' }
          overflowY={isMobile ? "scroll" : 'hidden' }
          spacing={4} 
          sx={scrollerStyle}
          justifyContent={'space-between'}
          padding={5}
          paddingLeft={isMobile ? 10 : 0}
        >
          {audiances.map(({ label, image, copy }) => (
            <Box >
              <Audiance label={label} image={image} copy={copy}/>
            </Box>
          ))}
        </Stack>
        <Button onClick={() => alert('todo')}>
          Share on X
        </Button>
      </VStack>
  );
}
