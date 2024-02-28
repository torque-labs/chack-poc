'use client';

import { Box, Flex, Button, useBreakpointValue, VStack, Skeleton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import Offer from './offer';

const campaigns: {
  id: string;
  label: string;
  link: string;
  image: string;
  copy: string;
  offersRemaining: number;
}[] = [
  {
    id: 'Tensor Marketplace',
    label: 'Tensor Marketplace',
    link: 'https://www.tensor.trade/',
    image:
      'https://pbs.twimg.com/profile_banners/1507082675827494912/1706801849/1500x500',
    copy: "Solana's Leading NFT Marketplace",
    offersRemaining: 50,
  },
  {
    id: 'GenesysGo',
    label: 'GenesysGo',
    link: 'https://t.co/g8tGFfe5Qg',
    image:
      'https://pbs.twimg.com/profile_banners/1385673473213624321/1703791206/1500x500',
    copy: 'Decentralized Storage on Solana',
    offersRemaining: 50,
  },
  {
    id: 'Solarplex',
    label: 'Solarplex',
    link: 'https://t.co/l4Ts47ECJN',
    image: 'https://pbs.twimg.com/media/GGUm7x-bMAEbik_?format=jpg&name=small',
    copy: 'Solarplex is a social marketplace that helps creators build authentic relationships with their audience.',
    offersRemaining: 50,
  },
];

export const scrollerStyle = {
  '&::-webkit-scrollbar': {
    width: '4px',
    borderRadius: '8px',
    backgroundColor: `#14F195`,
    scrollbarWidth: 'auto',
  },
  '&::-webkit-scrollbar-thumb': {
    width: '4px',
    borderRadius: '8px',
    backgroundColor: `#9945FF`,
    scrollbarWidth: 'auto',
  },
};

export default function OfferTab({siws, fetching, offers}:any) {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const nextOffer = () => {
    if (offers.length <= 1) {return;}
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevOffer = () => {
    if (offers.length <= 1) {return;}
    setCurrentOfferIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const offerSize = useBreakpointValue({ base: '280px', md: '330px' });

  return fetching ? (
    <VStack justifyContent={'space-around'}>
      <Skeleton border={'1px solid #14F195'} width={'320px'} height={'470px'}/>
    </VStack>
  ) : (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      align="center"
      justify="center"
      sx={scrollerStyle}
    >
      {offers?.length > 0 && !isMobile && (
        <Button
          onClick={prevOffer}
          leftIcon={<ChevronLeftIcon />}
          variant="ghost"
        >
          Prev
        </Button>
      )}
      {offers?.length > 0 && 
        <Offer {...offers[currentOfferIndex]} siws={siws}/>
      }
      {offers?.length > 0 && !isMobile && (
        <Button
          onClick={nextOffer}
          rightIcon={<ChevronRightIcon />}
          variant="ghost"
        >
          Next
        </Button>
      )}
      {offers?.length > 0 && isMobile && (
        <Flex width="100%" justifyContent="center" >
          <Button
            onClick={prevOffer}
            leftIcon={<ChevronLeftIcon />}
            variant="ghost"
          >
            Prev
          </Button>
          <Button
            onClick={nextOffer}
            rightIcon={<ChevronRightIcon />}
            variant="ghost"
          >
            Next
          </Button>
        </Flex>
      )}
      {offers?.length === 0 &&
        <p>Your wallet does qualify for any offers :(</p>
      }
    </Flex>
  );
}
