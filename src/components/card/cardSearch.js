import {
    Flex,
    Text,
    Center,
    Divider,
    Button,
    Image,
    Box,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import {GiAchievement, GiDiscGolfBag} from 'react-icons/gi'
import {TiArrowBack} from 'react-icons/ti'
import {MdAirplanemodeActive} from 'react-icons/md'
import bgpesawat from '../../asset/bgpesawat.jpg'


export default function CardSearchs() {

    return(
    <Card padding='0' width={['95%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-lg)' mb='1rem' height='75%' >
    
    <Flex flexDirection={['column','column','row', 'row']}>
        <Flex color='black' borderTopLeftRadius='var(--chakra-radii-lg)' borderBottomLeftRadius='var(--chakra-radii-lg)' width={['100vw','100vw','25vw','25vw']} justifyContent={'center'} alignItems='center'>
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems='center' gap='1'>
                    <Image
                          boxSize={['3rem','3rem','4.5rem','4.5rem']}
                          borderRadius='full'
                          src={bgpesawat}
                          alt='SaFly'
                        />
                    <Text textAlign='center' fontSize={['sm','sm','md','md']} fontWeight='bold' fontFamily='heading'>Airbus A330-300</Text>
            </Flex>
        </Flex>

        <Center>
        <Divider borderColor='#063970' border='2px solid #063970' orientation={['horizontal','horizontal','vertical','vertical']}/>
        </Center>

        <Box padding='4' color='black'  width={['100vw','100vw','50vw','50vw']}>
            <Flex justifyContent='space-between' mb='0.5rem' >
                <Text fontFamily='heading' fontWeight='semibold'>domestik</Text>
                <Text fontFamily='heading' fontWeight='semibold'>177941</Text>
            </Flex>

            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems='center' gap={['0.2rem','0.2rem', '0.5rem', '0.5rem']} fontFamily='sans-serif'>
                <Text fontSize={['sm','sm','md','md']}>16:45</Text> 
                <Divider borderColor='#063970' border='2px solid #063970'/>
                    <MdAirplanemodeActive size={['1rem','1rem','4rem','4rem']} color='black' border='1px solid #3579e6' borderRadius='100%'/>
                <Divider borderColor='#063970' border='2px solid #063970'/>
                <Text fontSize={['sm','sm','md','md']}>18:15</Text>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={'space-between'} mb='1rem' fontFamily='sans-serif'>
                <Text fontSize={['sm','sm','md','md']}>Surabaya</Text>
                <Text fontSize={['sm','sm','md','md']}>Direct</Text>
                <Text fontSize={['sm','sm','md','md']}>Jakarta</Text>
            </Flex>

            <Flex gap='3' mb='0.5rem' fontFamily='sans-serif'>
                <GiAchievement size='1.5rem' color='black'/>
                <Text >Economi Class</Text>
            </Flex>

            <Flex gap='3' mb='0.5rem' fontFamily='sans-serif'>
                <GiDiscGolfBag size='1.5rem' color='black'/>
                <Text >20KG</Text>
            </Flex>
            
        </Box>
        
        <Center>
        <Divider borderColor='#063970' border='2px solid #063970' orientation={['horizontal','horizontal','vertical','vertical']}/>
        </Center>

        <Flex color='black' borderTopRightRadius='var(--chakra-radii-lg)' borderBottomRightRadius='var(--chakra-radii-lg)' width={['100vw','100vw','25vw','25vw']} fontFamily='sans-serif' justifyContent='center' alignItems='center'>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' gap='2'>
                    <Text fontWeight='extrabold' textAlign='center' fontSize={['sm','sm','md','md']}>Rp945000</Text>
                    <Button  size={['sm', 'sm', 'md', 'md']} leftIcon={<TiArrowBack />} color='#063970' bg='#063970' variant='outline' >
                        View Details
                    </Button>
            </Flex>
        </Flex>
            

        </Flex>
    </Card>
    )
}