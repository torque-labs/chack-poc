import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image } from '@chakra-ui/react'

export default function Offer({label, link, image, copy}:any) {
    
    return (
        <Card 
            overflow='hidden'
            variant='outline'
            border={'1px solid #14F195'}
            height={'470px'}
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
                    <Button variant='solid' colorScheme='blue'>
                        Explore Offer
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}