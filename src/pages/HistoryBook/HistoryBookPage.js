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
import {TiArrowBack} from 'react-icons/ti'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
    <Box >
        <Image src={wave1} widht='100%' pos='absolute'/>
        <Image src={wave3} widht='100%'/>
    </Box>

    <Flex flexDirection='column'>
        <Box pl='3rem' alignSelf='flex-start'>
        <Link to="/" >
            <Button  size='md' leftIcon={<TiArrowBack />} color='white' bg='#063970' variant='solid' >
                Back to Home
            </Button>
        </Link>
        </Box>

        <Box alignSelf='center' justifyContent='center' bgGradient='linear(170deg, black, #063970, black)' borderRadius='var(--chakra-radii-lg)'
        width='30%' color='white' height='4rem' padding='2'>
            <Text fontSize="2rem" textAlign='center'>Booking History</Text>
        </Box>
    </Flex>
      <Flex flexDirection='column' height='100vh' widht='100%' padding='8'>
        <CardHistorybook />
        <CardHistorybook />
        <CardHistorybook />
      </Flex>

    </>
  );
}
