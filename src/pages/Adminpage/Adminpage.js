import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    IconButton,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Flex,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Link,
    Spinner,
    useDisclosure,
    Skeleton, 
    SkeletonCircle, 
    SkeletonText,
  } from '@chakra-ui/react'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {MdPayment} from 'react-icons/md'
import axios from "axios";
import AdminForm from "./AdminForm";




export default function Adminpage() {
    const [payment, setPayment] = useState([]);
    const [newPayment, setNewPayment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
      isOpen: editModalIsOpen,
      onOpen: editModalOnOpen,
      onClose: editModalOnClose,
    } = useDisclosure();

    const adminTrigger = (token) => {
      setIsLoading(true);
        const getPayment = async (token) => {
            try {
              const response = await axios.get(
                "https://tix-service-bej5.up.railway.app/ticketing-service/admin/list-payment",
                {
                  headers: {
                    Authorization: token,
                  },
                }
              );
              console.log(response);
              const data = response.data.data;
              setPayment(data);
            } catch (e) {
              console.log("FAILED TO GET PAYMENT...", e);
              setPayment(null);
            }
            setIsLoading(false);
          };
          getPayment(token);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(
              "https://tix-service-bej5.up.railway.app/ticketing-service/admin/create-payment",
              {
                paymentMethod: newPayment, 
              }
            );
            setNewPayment('');
            adminTrigger()
          } catch (e) {
            console.log("FAILED TO POST PAYMENT...", e);
          }
    } 

    const Delete = async (id) => {
      try {
        const response = await axios.delete(
          `https://tix-service-bej5.up.railway.app/ticketing-service/admin/disable-payment/${id}`
        );
        adminTrigger()
      } catch (e) {
        console.log("FAILED TO DELETE PAYMENT...", e);
      }
    }


useEffect(() => {
    const token = 
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjM5LCJlbWFpbCI6ImFkbWluQHNhZmx5LmNvbSIsInJvbGUiOiJBRE1JTiIsImp0aSI6IjMzM2IwZDZhLWIwYTktNDExZS05ZDFhLTJiZjYwOTlhM2I3NiIsImlhdCI6MTY3MTQyMjMxOCwiZXhwIjoxNjc0MDE0MzE4fQ.5YdX3VhqB8UbLpi8q8ugdZUilkuXx3ZhwhqDQh4b3C0';
    if (token) {
      adminTrigger(token);
    }
  }, []);

  return (
<>
<Flex flexDirection='column'>
    <Box alignSelf='center'>
        <Text fontSize={['2rem','2rem','3.5rem','3.5rem']} color='grey' fontFamily='sans-serif' fontWeight='semibold'>
            Payment CRUD
        </Text>
    </Box>

    <Box alignSelf='center' width='75%'>
    <form onSubmit={handleSubmit} width='100%'>
    <FormControl>
        <FormLabel textAlign='center'>Add Payment Method</FormLabel>
        <Flex>
        <Input placeholder='New Payment...' value={newPayment} onChange={(e) => setNewPayment(e.target.value)} type='text' />
        <Button type='submit' leftIcon={<MdPayment />} colorScheme='#063970' variant='outline'>
            Add
        </Button>
        </Flex>
    </FormControl>
    </form>
    </Box>

    <TableContainer alignSelf='center' width={['30%','35%','75%','75%']}>
        <Table variant='simple' fontSize={['0.6rem','0.6rem','1rem','1rem']}>
            <Thead>
                <Tr>
                    <Th textAlign={['center','center','start','start']}>Payment Id</Th>
                    <Th textAlign={['center','center','start','start']}>Payment Method</Th>
                    <Th isNumeric>Action</Th>
                </Tr>
                </Thead>
                <Tbody height='100%' overflowY='scroll'>
                {isLoading ?(
                    <Tr>
                    <Td><Skeleton height='20px' /></Td>
                    <Td><Skeleton height='20px' /></Td>
                    <Td isNumeric>
                      <Skeleton height='20px' />
                    </Td>
                    </Tr>
                )
                  :
                ( payment.length > 0 ?  (payment.map((pay)=>{
                        return(
                            <Tr key={pay.paymentId}>
                                <Td>{pay.paymentId}</Td>
                                <Td>{pay.paymentMethod}</Td>
                                <Td isNumeric>
                                            <IconButton
                                    variant='outline'
                                    colorScheme='yellow'
                                    aria-label='Edit Payment'
                                    icon={<FiEdit />}
                                    onClick={editModalOnOpen}
                                    />
                                    <IconButton
                                    variant='outline'
                                    colorScheme='red'
                                    aria-label='Delete payment'
                                    icon={<RiDeleteBin5Fill />}
                                    onClick={()=>Delete(pay.paymentId)}
                                    />

                                    <AdminForm
                                      isOpen={editModalIsOpen}
                                      onClose={editModalOnClose}
                                      paymentId={pay.paymentId}
                                      paymentMethod={pay.paymentMethod}
                                      adminTrigger={adminTrigger}
                                    />
                                </Td>
                            </Tr>
                        );
                    })
                    )
                      :
                    (
                      <Tr>
                        <Td>1.</Td>
                        <Td>No Data</Td>
                        <Td isNumeric>
                                    <IconButton
                                    variant='outline'
                                    colorScheme='yellow'
                                    aria-label='Edit Payment'
                                    icon={<FiEdit />}
                                    />
                                    <IconButton
                                    variant='outline'
                                    colorScheme='red'
                                    aria-label='Delete payment'
                                    icon={<RiDeleteBin5Fill />}
                                    />
                        </Td>
                    </Tr>
                    )
                ) }
                
            </Tbody>
        </Table>
    </TableContainer>
</Flex>

</>
  );
}
