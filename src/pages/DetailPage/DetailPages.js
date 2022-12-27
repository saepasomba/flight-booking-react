import React from 'react'
import DetailPost from '../../components/detailPost/DetailPost'
import {
  Flex,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'
import {TiArrowBack} from 'react-icons/ti'
import wave1 from '../../pages/Homepage/wave1.svg'
import wave3 from '../../pages/Homepage/wave3.svg'
import { Link } from "react-router-dom";


export default function DetailPages() {
  return ( 
    <Box>
      <Box >
        <Image src={wave1} widht='100%' pos='absolute'/>
        <Image src={wave3} widht='100%'/>
    </Box>

    <Flex flexDirection='column'>
        <Box pl={['0.5rem', '0.5rem', '3rem', '3rem']} alignSelf='flex-start'>
        <Link to="/" >
            <Button  size={['sm', 'sm', 'md', 'md']} leftIcon={<TiArrowBack />} color='white' bg='#063970' variant='solid' mb='1rem'>
                Back to Home
            </Button>
        </Link>
        </Box>
    </Flex> 
    <DetailPost/>
    </Box>
    
  );
}

