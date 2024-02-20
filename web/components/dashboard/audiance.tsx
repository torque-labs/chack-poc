import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image } from '@chakra-ui/react'

export default function Audiance({label, image, copy}:any) {
    
    return (
        <Card
            direction={{ base: 'row', sm: 'row' }}
            overflow='hidden'
            border={'1px solid #14F195'}
            width={'350px'}
            height={'150px'}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '30%', sm: '100px' }}
                src={image}
                alt={label + ' ' + image}
            />

            <Stack>
                <CardBody>
                <Heading size='sm'>{label}</Heading>

                <Text py='2'>
                    {copy}
                </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}