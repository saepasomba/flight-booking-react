import React, { useEffect, useState } from "react";
import {
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
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalCloseButton,
    Spinner,
  } from '@chakra-ui/react'
  import {MdPayment} from 'react-icons/md'
  import axios from "axios";

  export default function AdminForm(props) {
    const { isOpen, onClose, paymentId, paymentMethod, adminTrigger} = props;
    const [payment, setPayment] = useState(paymentMethod);

    const updateSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put(
              `https://tix-service-bej5.up.railway.app/ticketing-service/admin/update-payment/${paymentId}`,
              {
                paymentMethod: payment, 
              }
            );
            onClose();
            adminTrigger();
          } catch (e) {
            console.log("FAILED TO UPDATE PAYMENT...", e);
          }
    } 

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={updateSubmit}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Update Method Payment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Input placeholder='Payment' value={payment}  type='text' onChange={(e) => setPayment(e.target.value)}/>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose} > 
                    Close
                    </Button>
                    <Button variant='green' type='submit'>Update</Button>
                </ModalFooter>
                </ModalContent>
            </form>
            </Modal>
        </>
    );
  }