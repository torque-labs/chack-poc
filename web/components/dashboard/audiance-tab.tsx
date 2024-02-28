'use client';

import { Box, Button, Stack, VStack, Skeleton } from '@chakra-ui/react';
import Audiance from './audiance';
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
  const splits = audiacneId.split('_')
  audiacneId = audiacneId.slice(0, -2) + ':' + splits[splits.length -1];
  const [id, teir] = audiacneId.split(':');
  return (
    <Box key={audiacneId}>
      <Audiance label={audienceMap[id].label} image={audienceMap[id].image} copy={audienceMap[id].copy} teir={teir}/>
    </Box>
  )
}

export default function AudianceTab({ isMobile, audiences, fetching }: any) {
  useEffect(() => {}, [audiences, fetching]);
  // TODO state management for user's audiences
  return fetching ? (
      <Stack
          direction={isMobile ? 'column' : 'row'}
          overflowX={isMobile ? 'hidden' : 'scroll'}
          overflowY={isMobile ? 'scroll' : 'hidden'}
      >
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
        <Skeleton border={'1px solid #14F195'} width={'320px'} height={'150px'}/>
      </Stack>
    ) : (
      <VStack>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          overflowX={isMobile ? 'hidden' : 'scroll'}
          overflowY={isMobile ? 'scroll' : 'hidden'}
          spacing={4}
          sx={scrollerStyle}
          justifyContent={'space-between'}
          padding={5}
          paddingLeft={isMobile ? 10 : 0}
        >
          {audiences?.length && audiences.map((audiacneId: string) => createAudienceCard(audiacneId))}
        </Stack>
        <p>Audiances: {audiences?.length || 0}</p>
        {/* <Button onClick={() => alert('todo')}>Share on X</Button> */}
        {audiences?.length && <TweetButton audiences={audiences}/>}
      </VStack>
  );
}
