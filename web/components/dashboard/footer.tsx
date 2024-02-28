import {
  Heading,
  IconButton,
  VStack,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { SiTwitter, SiGithub } from 'react-icons/si';

export const SimpleFooter: React.FC = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100px' /* Adjusted height for mobile */,
        backgroundImage: 'linear-gradient(to left, #9945FF, #14F195)',
      }}
    >
      <VStack>
        <HStack padding={5} spacing={4}>
          <Heading size="md">Onnyx Labs</Heading>
          <HStack spacing={1}>
            <IconButton aria-label="Twitter" icon={<SiTwitter />}></IconButton>
            <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
          </HStack>
        </HStack>
      </VStack>
    </footer>
  );
};
export default SimpleFooter;
