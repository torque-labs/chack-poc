'use client';

import { HStack, VStack } from '@chakra-ui/react';
import { AppHero } from '../ui/ui-layout';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
  { label: 'Solana Cookbook', href: 'https://solanacookbook.com/' },
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  {
    label: 'Solana Developers GitHub',
    href: 'https://github.com/solana-developers/',
  },
];

export default function OfferTable() {
  return (
      <VStack>
        {links.map((link) => (
          <HStack border={'4px solid #641ae6'} paddingX={10} paddingY={4} justifyContent={'space-between'} width={"98%"}>
            <img src="/favicon.ico" />
            <p>{link.label}</p>
            <a
              href={link.href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          </HStack>
        ))}
      </VStack>
  );
}
