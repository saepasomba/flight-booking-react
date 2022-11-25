import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

export default function LoginModal(props) {
  const {
    isOpen,
    onOpen,
    onClose
  } = props;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(
    {
      mode: 'onChange',
      resolver: yupResolver(loginSchema)
    }
  )
    
  const loginSubmit = (data) => {
    console.log('Login clicked')
    console.log(data)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>

        <form onSubmit={handleSubmit(loginSubmit)}>
        <ModalHeader>Login to your account!</ModalHeader>

        <ModalBody>
            <Flex flexDir='column' gap='1rem'>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input {...register('email')} placeholder='Email...' />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input {...register('password')} type='password' placeholder='Password...'/>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            </Flex>
        </ModalBody>

        <ModalFooter>
          <Flex gap='1rem'>
            <Button onClick={onClose} >
              Cancel
            </Button>
            <Button type='submit' colorScheme='blue'>
              Login
            </Button>
          </Flex>
        </ModalFooter>

          </form>
      </ModalContent>
    </Modal>
  )
}
