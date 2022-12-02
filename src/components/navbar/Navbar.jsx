import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Text,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu,FiChevronDown, FiLogIn  } from 'react-icons/fi'
import {CgLogOut} from 'react-icons/cg'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {MdOutlinePayment} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {FaHome} from 'react-icons/fa'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'


export default function Navbar() {

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const {
    isOpen: loginIsOpen,
    onOpen: loginOnOpen,
    onClose: loginOnClose,
  } = useDisclosure();

  const {
    isOpen: registerIsOpen,
    onOpen: registerOnOpen,
    onClose: registerOnClose,
  } = useDisclosure();



  return (
    <Box
      as="section"
      pb={{
        base: '12',
        md: '24',
      }}
    >
      <Box as="nav" bg="#063970" color='white' boxShadow={useColorModeValue('lg', 'dark-lg')} >
        <Container
          py={{
            base: '4',
            lg: '5',
          }}
          maxW={"100%"}
        >
          <HStack spacing="10" justify="space-between">
          <Text fontSize='1rem' fontFamily='cursive'>
            BinarFly
          </Text>

            {isDesktop ? (
              <Flex justify="flex-end" gap="2rem" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Homepage', 'Booked List', 'Payment', 'About Us'].map((item) => (
                    <Button color='#ffffff' key={item}>{item}</Button>
                  ))}

                  <Menu>
                    <MenuButton as={Button} colorScheme='white' variant='outline' leftIcon={<IoIosNotificationsOutline color='#ffffff' size='1.5rem' me={'0.05rem'} />} rightIcon={<FiChevronDown color='#ffffff'/>}>
                    </MenuButton>
                    <MenuList color='black' maxW={'var(--chakra-sizes-container-sm)'}>
                      <MenuItem minH='48px'>                  
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eius laudantium accusantium unde et quia, hic quos voluptates cupiditate facilis fugiat inventore accusamus. Blanditiis cum sed repellendus labore doloribus.</span>
                      </MenuItem>
                      <MenuItem minH='40px'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero, unde molestiae minus eos aliquid, iste voluptate consectetur, ducimus quibusdam saepe similique consequuntur fugit reiciendis ipsa sint fuga earum dolore.</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </ButtonGroup>

                <HStack spacing="3">
                  <Button colorScheme='white' variant='outline' onClick={loginOnOpen}>Login</Button>
                  <Button colorScheme='blue' variant='solid' onClick={registerOnOpen}>Register</Button>
                </HStack>
              </Flex>
            ) : (
              <Flex gap={'0.5rem'} ml="2rem">
                <Menu spacing="3">
                    <MenuButton as={Button} colorScheme='white' variant='outline' px={'var(--chakra-space-2)'} leftIcon={<IoIosNotificationsOutline color='#ffffff' size='1.5rem' me={'0rem'} />} rightIcon={<FiChevronDown color='#ffffff' ms={'0rem'} />}>
                    </MenuButton>
                    <MenuList color='black' maxW={'var(--chakra-sizes-60)'} minW={'var(--chakra-sizes-60)'}>
                      <MenuItem minH='48px'>                  
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eius laudantium accusantium unde et quia, hic quos voluptates cupiditate facilis fugiat inventore accusamus. Blanditiis cum sed repellendus labore doloribus.</span>
                      </MenuItem>
                      <MenuItem minH='40px'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero, unde molestiae minus eos aliquid, iste voluptate consectetur, ducimus quibusdam saepe similique consequuntur fugit reiciendis ipsa sint fuga earum dolore.</span>
                      </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<FiMenu />}
                    variant='outline'
                  />
                  <MenuList color='black' fontSize='1.5rem'>
                    <MenuItem icon={<FaHome />}>
                      Homepage
                    </MenuItem>
                    <MenuItem icon={<BsBookmarkCheckFill />}>
                      Booked List
                    </MenuItem>
                    <MenuItem icon={<MdOutlinePayment />}>
                      Payment
                    </MenuItem>
                    <MenuItem icon={<FcAbout color='black' />}>
                      About Us
                    </MenuItem>
                    <MenuItem icon={<FiLogIn color='black' />} onClick={loginOnOpen}>
                      Login
                    </MenuItem>
                    <MenuItem icon={<CgLogOut color='black' />} onClick={registerOnOpen}>
                      Register
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </HStack>
        </Container>
      </Box>
      <LoginModal isOpen={loginIsOpen} onClose={loginOnClose} />
      <RegisterModal isOpen={registerIsOpen} onClose={registerOnClose} />
    </Box>
  )
}