import {
  Card,
  VStack,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Image,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { sendEvent } from '../lib/onnyx-backend';

export default function Offer({
  title,
  targetLink,
  imageUrl,
  description,
  campaignPubKey,
  siws,
  authType,
}: any) {
  const wallet = useWallet();
  const clickOffer = async () => {
    if (!wallet.publicKey || !wallet.connected) {
      alert('wallet not connected');
      return;
    }
    await sendEvent(
      wallet?.publicKey?.toString(),
      campaignPubKey,
      'publisherKey',
      authType,
      siws
    );
  };

  return (
    <Card
      overflow="hidden"
      variant="outline"
      border={'1px solid #14F195'}
      height={'530px'}
      width={'320px'}
      padding={3}
    >
      <CardBody width="300px">
        <VStack>
          <Image src={imageUrl} alt={title + ' ' + imageUrl} height={'180px'} />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </VStack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={'center'}>
        <a href={targetLink} target="_blank" rel="noopener noreferrer">
          <Button variant="solid" colorScheme="blue" onClick={clickOffer}>
            Explore Offer
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
