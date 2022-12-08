import React from "react";
import {
  Flex,
  Image,
  Box,
  Center,
} from '@chakra-ui/react'
import backgroundHome from './backgroundHome.jpg'
import wave from './wave.svg'
import wave1 from './wave1.svg'
import wave2 from './wave2.svg'
import wave3 from './wave3.svg'
import Navbar from "../../components/navbar/Navbar.jsx";
import {Footers} from '../../components/footer/Footer.jsx'
import CardHome from '../../components/card/cardHome.js'
export default function Homepage() {
  return (
    <>
      <Navbar />

      <Box >
        <Image src={wave1} widht='100%' pos='absolute'/>
        <Image src={wave3} widht='100%'/>
      </Box>

      <Flex flexDirection='column' height={['150vh','150vh','140vh','100vh']} widht='100%'>
        <Center>
          <Image src={backgroundHome} height={'50vh'} widht='100%'/>
        </Center>
        <CardHome />
      </Flex>

      <Box>
        <Image src={wave} widht='100%' pos='absolute'/>
        <Image src={wave2} widht='100%'/>
      </Box>
      
      <Footers/>
    </>
  );
}
