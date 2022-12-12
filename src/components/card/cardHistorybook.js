import {
    Flex,
    Text,
    Heading,
    Divider,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import {GiAchievement} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import {MdAirplanemodeActive} from 'react-icons/md'


export default function CardHistorybook() {

    return(
    <Card padding='0' width={['95%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm'>

        <CardHeader bgGradient='linear(170deg, black, #063970, black)' color='white' borderTopLeftRadius='var(--chakra-radii-xl)' borderTopRightRadius='var(--chakra-radii-xl)' pb='3'>
            <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']}>
                    <Heading textAlign={['start','start','null','null']} size='md'  mb={['1','1','0','0']}>INV-MPW-221209-13824</Heading>
                    <Text textAlign='end'>Rp1820000</Text>
            </Flex>
        </CardHeader>

        <CardBody padding='4' color='white' bg='#3579e6'>
            <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} mb='1rem'>
                <Text>Booked By:    Tn. Riko</Text>
                <Text>Total Person: 2 Person</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem' >
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

        <Divider color='white'/>
            <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} padding='1rem' color='white'  alignItems={['flex-end','flex-end','center','center']} bgGradient='linear(170deg, black, #063970, black)' borderBottomLeftRadius='var(--chakra-radii-xl)' borderBottomRightRadius='var(--chakra-radii-xl)'>
                <Text>Payment</Text>
                <Text>Transfer Bank BCA</Text>
            </Flex>
    </Card>
    )
}