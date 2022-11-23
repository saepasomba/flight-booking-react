import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

export default function LoginModal(props) {
  const {
    isOpen,
    onOpen,
    onClose
  } = props;
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>

        <ModalHeader>Login to your account!</ModalHeader>

        <ModalBody>
        <form>
            <Flex flexDir='column' gap='1rem'>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email...' />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password...' />
            </FormControl>
            </Flex>
          </form>
        </ModalBody>

        <ModalFooter>
          <Flex gap='1rem'>
            <Button>
              Cancel
            </Button>
            <Button colorScheme='blue'>
              Login
            </Button>
          </Flex>
        </ModalFooter>

      </ModalContent>
    </Modal>
  )
}
