import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'
import CardHistorybook from "../../components/card/cardHistorybook";
import wave1 from '../../pages/Homepage/wave1.svg'
import wave3 from '../../pages/Homepage/wave3.svg'
import wave from '../../pages/Homepage/wave.svg'
import wave2 from '../../pages/Homepage/wave2.svg'
import {TiArrowBack} from 'react-icons/ti'
import { Link } from "react-router-dom";

export default function HistoryBookPage() {
  return (
  <Box>
    <Box >
        <Image src={wave1} widht='100%' pos='absolute'/>
        <Image src={wave3} widht='100%'/>
    </Box>

    <Flex flexDirection='column' >
        <Box pl={['0.5rem', '0.5rem', '3rem', '3rem']} alignSelf='flex-start'>
        <Link to="/" >
            <Button  size={['sm', 'sm', 'md', 'md']} leftIcon={<TiArrowBack />} color='white' bg='#063970' variant='solid' mb='1rem'>
                Back to Home
            </Button>
        </Link>
        </Box>

        <Box alignSelf='center' justifyContent='center' bg='#063970' borderRadius='var(--chakra-radii-lg)'
        width={['45%','45%','30%','30%']} color='white' height={['2rem', '2rem', '4rem', '4rem']} padding={['1','1','2','2']}>
            <Text fontSize={['1rem', '1rem', '2rem', '2rem']} textAlign='center'>Booking History</Text>
        </Box>
    </Flex>
      <Flex flexDirection='column' height='100%' widht='100%' padding='8'>
        <CardHistorybook />
        <CardHistorybook />
        <CardHistorybook />
      </Flex>

      <Box >
        <Image src={wave} widht='100%' pos='absolute'/>
        <Image src={wave2} widht='100%'/>
    </Box>
    </Box>
  );
}