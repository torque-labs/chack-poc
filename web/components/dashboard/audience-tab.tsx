'use client';

import { Box, Text, Stack, VStack, Skeleton, HStack } from '@chakra-ui/react';
import Audience from './audience';
import { scrollerStyle } from './offer-tab';
import { useEffect } from 'react';
import TweetButton from './TweetButton';

const audienceMap: any = {
  UTILITY_TOKEN: {
    label: 'Utility Holder',
    image: '/NFT_degen.png',
    copy: 'WEN UTILITY!! You hold utiliy tokens for projects in Solana\'s ecosystem.',
  },
  MEME_COIN: {
    label: 'Meme Coiner',
    image: '/shit_coiner.png',
    copy: 'DEGEN ALERT! You love your meme coins!',
  },
  BLUE_CHIP_NFT: {
    label: 'Blue Chip NFT Holder',
    image: '/blue_chip.png',
    copy: 'You hold Blue Chip NFTs.',
  },
};

function createAudienceCard(audiacneId: string) {
  const [id, teir] = audiacneId.split(':');
  return (
    <Box key={audiacneId}>
      <Audience label={audienceMap[id].label} image={audienceMap[id].image} copy={audienceMap[id].copy} teir={teir}/>
    </Box>
  )
}

export default function AudienceTab({ isMobile, audiences, fetching }: any) {
  useEffect(() => {}, [audiences, fetching]);
  // TODO state management for user's audiences
  const Stacker = isMobile ? VStack : HStack;
  return fetching ? (
      <Stacker 
          overflowX={isMobile ? 'hidden' : 'scroll'}
          overflowY={isMobile ? 'scroll' : 'hidden'}
      >
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
      </Stacker>
    ) : (
      <VStack>
        {audiences?.length &&
          <Stack
            direction={isMobile ? 'column' : 'row'}
            overflowX={isMobile ? 'hidden' : 'scroll'}
            overflowY={isMobile ? 'scroll' : 'hidden'}
            spacing={4}
            sx={scrollerStyle}
            justifyContent={'space-between'}
            padding={5}
            // paddingLeft={isMobile ? 10 : 0}
          >
            {audiences.map((aud: any) => createAudienceCard(aud.id))}
          </Stack>
        }
        {/* <Button onClick={() => alert('todo')}>Share on X</Button> */}
        {audiences?.length && <TweetButton audiences={audiences}/>}
        {audiences?.length === 0 &&
          <Text padding={5} textAlign={'center'}>Your wallet has not done anything interesting on Solana recently :(</Text>
        }
      </VStack>
  );
}
