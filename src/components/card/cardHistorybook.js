import {
    Button,
    Flex,
    Text,
    Heading,
    Divider,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import {GiAchievement} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import {MdAirplanemodeActive} from 'react-icons/md'


export default function CardHome() {

    return(
    <Card padding='0' width={['90%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm'>

        <CardHeader bgGradient='linear(170deg, black, #063970, black)' color='white' borderTopLeftRadius='var(--chakra-radii-xl)' borderTopRightRadius='var(--chakra-radii-xl)' pb='3'>
            <Flex justifyContent='space-between'>
                    <Heading size='md'>INV-MPW-221209-13824</Heading>
                    <Text justifyContent='flex-end'>Rp1820000</Text>
            </Flex>
        </CardHeader>

        <CardBody padding='4' color='white' bg='#3579e6'>
            <Flex justifyContent='space-between' mb='1rem'>
                <Text>Booked By: Tn. Riko</Text>
                <Text>Total Person: 2 Person</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
                <MdAirplanemodeActive size='1.5rem' color='black'/>
                <Text>Destination: Surabaya - Jakarta</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
                <FaCalendarAlt size='1.5rem' color='black'/>
                <Text>2022-12-09 13:08:24</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
                <GiAchievement size='1.5rem' color='black'/>
                <Text >Business Class</Text>
            </Flex>
            
        </CardBody>

        <Divider color='white' bg='blue' />
            <Flex justifyContent='space-between' padding='1rem' color='white'  alignItems='center' bgGradient='linear(170deg, black, #063970, black)' borderBottomLeftRadius='var(--chakra-radii-xl)' borderBottomRightRadius='var(--chakra-radii-xl)'>
                <Text>Payment</Text>
                <Text>Transfer Bank BCA</Text>
            </Flex>
    </Card>
    )
}