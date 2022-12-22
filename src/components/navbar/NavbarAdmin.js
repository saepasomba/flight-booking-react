import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Text,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  
  export default function NavbarAdmin() {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
      })

      return (
        <Box
          as="section"
          pb={{
            base: '12',
            md: '24',
          }}
        >
          <Box as="nav" bg="#063970" color='white' boxShadow={useColorModeValue('sm', 'sm-dark')} >
            <Container
              py={{
                base: '4',
                lg: '5',
              }}
              maxW={"100%"}
            >
              <HStack spacing="10" justify="space-between">
              <Text fontSize="1.5rem" fontFamily="cursive">
                SaFly
              </Text>
                {isDesktop ? (
                  <Flex justify="flex-end" gap="2rem" flex="1">
                    <ButtonGroup variant="link" spacing="8">
                        <Button >Admin Page</Button>
                    </ButtonGroup>
                    <HStack spacing="3">
                      <Button 
                        colorScheme="white"
                        variant="outline">Sign in</Button>
                      <Button colorScheme="blue"
                        variant="solid">Sign up</Button>
                    </HStack>
                  </Flex>
                ) : (
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </HStack>
            </Container>
          </Box>
        </Box>
      )
  }
  