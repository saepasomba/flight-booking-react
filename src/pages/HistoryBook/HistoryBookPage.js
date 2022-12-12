import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'
import CardHistorybook from "../../components/card/cardHistorybook";
import CardSearchs from "../../components/card/cardSearch";
import wave from '../../pages/Homepage/wave.svg'
import wave2 from '../../pages/Homepage/wave2.svg'
import {TiArrowBack} from 'react-icons/ti'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'

export default function HistoryBookPage() {
  return (
  <Box>
    <Navbar/>

    <Flex flexDirection='column'>
        <Box pl={['0.5rem', '0.5rem', '3rem', '3rem']} alignSelf='flex-start'>
        <Link to="/" >
            <Button  size={['sm', 'sm', 'md', 'md']} leftIcon={<TiArrowBack />} color='white' bg='#063970' variant='solid' mb='1rem' top={['10px', '25px', '25px', '15px']}>
                Back to Home
            </Button>
        </Link>
        </Box>

        <Box alignSelf='center' justifyContent='center' bgColor="#063970"  borderRadius='var(--chakra-radii-lg)'
        width={['45%','45%','35%','30%']} color='white' height={['2rem', '2rem', '4rem', '4rem']} padding={['1','1','2','2']}>
            <Text fontSize={['1rem', '1rem', '2rem', '2rem']} textAlign='center' color='ffffff'>Booking History</Text>
        </Box>
    </Flex>
      <Flex flexDirection='column' height='100vh' widht='100%' padding='8'>
        <CardHistorybook />
        
        {/* <CardSearchs /> */}
      </Flex>
      <Box>
        <Image src={wave} widht='100%' pos='absolute'/>
        <Image src={wave2} widht='100%'/>
      </Box>
    </Box>
  );
}
