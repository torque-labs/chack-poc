import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image } from '@chakra-ui/react'
import { useWallet } from '@solana/wallet-adapter-react';
import { sendEvent } from '../lib/onnyx-backend';

export default function Offer({label, link, image, copy, id, siws}:any) {
    const wallet = useWallet();
    const clickOffer = async () => {
        if (!wallet.publicKey || !wallet.connected) {
            alert('wallet not connected');
            return;
        }
        await sendEvent(wallet?.publicKey?.toString(), id, 'publisherKey', siws);
    };
    
    return (
        <Card 
            overflow='hidden'
            variant='outline'
            border={'1px solid #14F195'}
            height={'470px'}
            width={'320px'}
            padding={2}
        >
            <CardBody width='300px'>
                <Image
                    src={image}
                    alt={label + ' ' + image}
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{label}</Heading>
                <Text>
                    {copy}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent={'center'}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant='solid' colorScheme='blue' onClick={clickOffer}>
                        Explore Offer
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}