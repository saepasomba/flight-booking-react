import React from 'react'
import { Card, CardHeader, CardBody,Heading, Box,HStack,Divider,Image,Flex,Text, CardFooter} from '@chakra-ui/react'
import backgroundHome from '../../pages/Homepage/backgroundHome.jpg'
import {GiAchievement} from 'react-icons/gi'
import {FaPlaneDeparture} from 'react-icons/fa'
import {MdAirplaneTicket} from 'react-icons/md'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function DetailPost() {
  return (
    <Card borderColor='black' padding='0' width={['95%','80%', '80%', '55%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm' >
         <CardHeader
    bg="#063970"
    borderRadius='9px 9px 9px 9px'
  > 
     <Flex flexDirection={['row','row','row', 'row']} justifyContent={['space-between','space-between','space-between','space-between']}>
                    <Heading color='white' textAlign={['start','start','null','null']} size={['sm','sm','md','md']}  mb={['1','1','0','0']}>INV-MPW-221209-13824</Heading>
                     <Text textAlign='start' color='white' >2022-12-09 13:08:24</Text>
            </Flex>
  </CardHeader>
  <CardBody padding='4' color='black'>
            <Flex flexDirection={['row','row','row', 'row']} justifyContent={['','space-between','space-between','space-between']} mb='1rem'>
                <Text>Booked By :    Tn. Riko</Text>
                <Text>Total Person : 2 Person</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem' >
                <Text>Destination  : Surabaya - Jakarta</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
            <Text>Flight Date    : </Text> <Text>2022-12-09 13:08:24</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
            <Text >Type Class : </Text> <Text >Business Class</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem'>
            <Text >Type Airplane : </Text> <Text >Boeing 777-30GER</Text>
            </Flex>
            <Flex gap='3' mb='0.5rem' flexDirection={['row','row','row', 'row']} justifyContent={['space-between','space-between','space-between','space-between']}> 
            <Text >Depart Time :  20.45</Text>  <FaPlaneDeparture size='1.5rem' color='black'/> <Text >Arrive time : 21.45</Text>
            </Flex>
            
        </CardBody>
  <HStack bg='whitesmoke' >
            <Divider borderColor='#063970' border='3px solid #063970' />
        </HStack>
        
        <CardFooter height={['200']} padding='4' color='black'> <Flex gap={['1','20','20','40']} mb='0.5rem' flexDirection={['row','row','row', 'row']} 
        justifyContent={['space-between','space-between','space-between','space-between']}>
           <Text >Passengers</Text> <Text >Passenger Type</Text> <Text >Seat Number</Text>  <Text >Baggage</Text>
           </Flex>
            
           </CardFooter>
           

           
  </Card>

  );
}
