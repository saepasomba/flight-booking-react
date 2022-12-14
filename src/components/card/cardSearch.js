import {
    Flex,
    Text,
    Heading,
    Divider,
    HStack,
    Image,
    Box,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import {GiAchievement} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import {MdAirplanemodeActive} from 'react-icons/md'
import backgroundHome from '../../pages/Homepage/backgroundHome.jpg'


export default function CardSearchs() {

    return(
    <Card padding='0' width={['95%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm' >
    
    <Flex flexDirection={['column','column','row', 'row']}>
        <Box bgGradient='linear(170deg, black, #063970, black)' color='white' borderTopLeftRadius='var(--chakra-radii-xl)' borderTopRightRadius='var(--chakra-radii-xl)' pb='3'>
            <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']}>
                    <Heading textAlign={['start','start','null','null']} size={['sm','sm','md','md']}  mb={['1','1','0','0']}>INV-MPW-221209-13824</Heading>
                    <Text textAlign='start'>Rp1820000</Text>
            </Flex>
        </Box>

        <Box padding='4' color='white' bg='#3579e6'>
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
            
        </Box>
        
        <Flex bg='whitesmoke' flexDirection={['column','column','row', 'row']}>
            <Divider borderColor='#063970' border='3px solid #063970' orientation='vertical'/>
                <Image src={backgroundHome} height={'3vh'} widht='30%'/>
            <Divider borderColor='#063970' border='3px solid #063970' orientation='vertical'/>
        </Flex>
        

            <Flex flexDirection={['column','column','column', 'column']} justifyContent={['center','center','space-between','space-between']} padding='1rem' color='white'  alignItems={['flex-end','flex-end','center','center']} bgGradient='linear(170deg, black, #063970, black)' borderBottomLeftRadius='var(--chakra-radii-xl)' borderBottomRightRadius='var(--chakra-radii-xl)'>
                <Text>Payment</Text>
                <Text>Transfer Bank BCA</Text>
            </Flex>
        </Flex>
    </Card>
    )
}