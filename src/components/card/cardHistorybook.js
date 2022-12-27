import {
    Flex,
    Box,
    Text,
    Heading,
    Divider,
    HStack,
    Image,
    Skeleton, 
    Center,
    Spinner,
    MenuItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
  } from '@chakra-ui/react'
  import React, {useState, useEffect} from 'react'
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import {GiAchievement} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import {MdAirplanemodeActive} from 'react-icons/md'
import backgroundHome from "../../asset/backgroundHome.jpg";
import axios from "axios";


export default function CardHistorybook() {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const render_numeric=(value)=>{
        let numbers = Number(value)
        return numbers?.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        })
    }



    const getHistoryBook = async () => {
        setIsLoading(true);
        const response = await axios.get(
          "https://tix-service-bej5.up.railway.app/ticketing-service/booking/history?limit=10&pageNumber=1",
          { headers: { Authorization: localStorage.getItem("USER_TOKEN") } }
        );
        setHistory(response.data.data);
        console.log(response);
        setIsLoading(false);
      };

      useEffect(() => {
        getHistoryBook();
      }, []);

    return(
    <>
    {isLoading ? (
    <Card padding='0' width={['95%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm' >
    <CardHeader bg='#063970' color='white' borderTopLeftRadius='var(--chakra-radii-xl)' borderTopRightRadius='var(--chakra-radii-xl)' pb='3'>
        <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} >
        <Skeleton height='1.2rem' width='12rem' size={['sm','sm','md','md']} mb={['0.5rem','0.5rem','0rem','0rem']}/>
        <Skeleton height='1.2rem' width='7rem' size={['sm','sm','md','md']}/>
        </Flex>
    </CardHeader>

    <CardBody padding='4' color='blue'  bg='#3579e6'>
        <Center>
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Center>
    </CardBody>

    <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} padding='1rem' color='white'  alignItems={['flex-end','flex-end','center','center']} bg='#063970' borderBottomLeftRadius='var(--chakra-radii-xl)' borderBottomRightRadius='var(--chakra-radii-xl)'>
        <Skeleton height='1.2rem' width='5rem' size={['sm','sm','md','md']} mb={['0.5rem','0.5rem','0rem','0rem']}/>
        <Skeleton height='1.2rem' width='9rem' size={['sm','sm','md','md']} />
    </Flex>
</Card>
    
    ) : history && history.length > 0 ? (
    history.map((histories)=>{
        return(
            <Card padding='0' width={['95%','80%', '80%', '75%']} bg='white' border='1px solid whitesmoke' alignSelf='center' borderRadius='var(--chakra-radii-xl)' mb='1rem' size='sm' >

                <CardHeader bg='#063970' color='white' borderTopLeftRadius='var(--chakra-radii-xl)' borderTopRightRadius='var(--chakra-radii-xl)' pb='3'>
                    <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']}>
                    <Heading textAlign={['start','start','null','null']} size={['sm','sm','md','md']}  mb={['1','1','0','0']}>{histories.invoiceNo}</Heading>
                            <Text textAlign='start'> {`${render_numeric(histories.amount)}`} </Text>
                    </Flex>
                </CardHeader>

                <CardBody padding='4' color='white' bg='#3579e6'>
                    <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} mb='1rem'>
                        <Text>{`booking by:  ${histories.bookingBy}`}</Text>
                        <Text>{`Total Person: ${histories.totalPerson} Person`}</Text>
                    </Flex>
                    <Flex gap='3' mb='0.5rem' >
                        <MdAirplanemodeActive size='1.5rem' color='black'/>
                        <Text>{`Destination: ${histories.destination}`}</Text>
                    </Flex>
                    <Flex gap='3' mb='0.5rem'>
                        <FaCalendarAlt size='1.5rem' color='black'/>
                        <Text> {histories.paymentDate} </Text>
                    </Flex>
                    <Flex gap='3' mb='0.5rem' flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']}>
                        <Flex gap='3' mb='0.5rem'>
                            <GiAchievement size='1.5rem' color='black'/>
                            <Text > {histories.classType} </Text>
                        </Flex>
                            <Popover>
                                <PopoverTrigger>
                                    <Button color='white' bg='#3579e6' cursor='pointer'>Show QR Code</Button>
                                </PopoverTrigger>
                                <PopoverContent widht='var(--chakra-sizes-64)'>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader color='black' textAlign='center' _hover={{background: '#063970', color:'white'}}>QR CODE</PopoverHeader>
                                    <PopoverBody>
                                        <Center>
                                            <Image widht='50%' src={histories.qrCodeUrl}/>
                                        </Center>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                    </Flex>
                    
                </CardBody>

                <HStack bg='whitesmoke' >
                    <Divider borderColor='#063970' border='3px solid #063970' />
                        <Image src={backgroundHome} height={'3vh'} widht='30%'/>
                    <Divider borderColor='#063970' border='3px solid #063970'/>
                </HStack>


                    <Flex flexDirection={['column','column','row', 'row']} justifyContent={['center','center','space-between','space-between']} padding='1rem' color='white'  alignItems={['flex-end','flex-end','center','center']} bg='#063970' borderBottomLeftRadius='var(--chakra-radii-xl)' borderBottomRightRadius='var(--chakra-radii-xl)'>
                        <Text>Payment</Text>
                        <Text> {histories.paymentName}</Text>
                    </Flex>
                </Card>
        )
    })
    ) : (
        <Box alignSelf='center'>
            <Text color='#063970'>
                <h1 color>History Booking Not Found</h1>
            </Text>
        </Box>
    )
}

    </>
    )
}
