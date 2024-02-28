import { Card, HStack, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image } from '@chakra-ui/react'

export default function Audience({label, image, copy, teir}:any) {
    function getTeirColor(teir: number) {
        if (teir == 1) {
            return 'skyblue'
        } else if (teir == 2) {
            return 'violet'
        } else {
            return 'red'
        }
    }
    return (
        <Card
            direction={{ base: 'row', sm: 'row' }}
            overflow='hidden'
            border={'1px solid #14F195'}
            width={'320px'}
            height={'150px'}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '30%', sm: '100px' }}
                src={image}
                alt={label + ' ' + image}
            />

            <Stack justifyContent={'space-evenly'}>
                <CardBody>
                <Heading size='sm'>{label}</Heading>
                    
                <Text py='2'>
                    {copy}
                </Text>

                {teir && <Heading size='sm' textColor={getTeirColor(teir)}>{'LVL: ' + teir}</Heading>}
                </CardBody>
            </Stack>
        </Card>
    )
}