import {
    Flex,
    Heading,
    HStack,
    IconButton,
    Spacer,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'
  
  export const SimpleFooter: React.FC = () => {
  
    return (
      <footer style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '80px',   /* Height of the footer */
        backgroundImage: "linear-gradient(to left, #9945FF, #14F195)"
     }}>
        <HStack padding={5}>
            <Heading size="md">Onnyx Labs</Heading>
            <Spacer />
            {/* <Text fontSize="sm">Copyright &copy; {new Date().getFullYear()} Brand, Inc.</Text>
            <Spacer /> */}
            <HStack spacing={1}>
                {/* <IconButton aria-label="Facebook" icon={<SiFacebook />}></IconButton> */}
                <IconButton aria-label="Twitter" icon={<SiTwitter />}></IconButton>
                {/* <IconButton aria-label="LinkedIn" icon={<SiLinkedin />}></IconButton> */}
                <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
          </HStack>
        </HStack>
          
          
          
      </footer>
    )
  }
  export default SimpleFooter