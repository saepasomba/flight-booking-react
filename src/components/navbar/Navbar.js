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
  Spinner,
  Image,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiMenu, FiChevronDown, FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import axios from "axios";
import { Link } from "react-router-dom";
import notifLogo from './notifLogo.png'

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [notif, setNotif] = useState([])
  const [notifCount, setNotifcount] = useState();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

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

  const authTrigger = (token) => {
    const getProfile = async (token) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://tix-service-bej5.up.railway.app/ticketing-service/users/my-profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        const data = response.data.data;
        setUser(data);
      } catch (e) {
        console.log("FAILED TO GET PROFILE...", e);
        setUser(null);
      }
      setIsLoading(false);
    };
    getProfile(token);

    const getListNotification = async (token) => {
      try {
        const response = await axios.get(
          "https://tix-service-bej5.up.railway.app/ticketing-service/users/get-notif?limit=10&pageNumber=1",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data.data;
        console.log(data)
        setNotif(data);
      } catch (e) {
        console.log("FAILED TO GET PROFILE...", e);
        setNotif(null);
      }
    };
    getListNotification(token);

    const getCountNotification = async (token) => {
      try {
        const response = await axios.get(
          "https://tix-service-bej5.up.railway.app/ticketing-service/users/count-notif",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data.data;
        setNotifcount(data);
        console.log(data)
      } catch (e) {
        console.log("FAILED TO GET PROFILE...", e);
        setNotifcount(null);
      }
    };
    getCountNotification(token);
  };

  

  const logout = () => {
    localStorage.removeItem("USER_TOKEN");
    setUser();
  };

  useEffect(() => {
    const token = localStorage.getItem("USER_TOKEN");
    if (token) {
      authTrigger(token);
    }
  }, []);

  return (
    <Box
      as="section"
      pb={'0'}
    >
      <Box
        as="nav"
        bg="#063970"
        color="white"
        boxShadow={useColorModeValue("lg", "dark-lg")}
      >
        <Container
          py={{
            base: "4",
            lg: "5",
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
                  {["Homepage", "Booked List", "Payment", "About Us"].map(
                    (item) => (
                      <Button color="#ffffff" key={item}>
                        {item}
                      </Button>
                    )
                  )}

                  {user ? (
                    <Menu>
                    <MenuButton
                      as={Button}
                      colorScheme="white"
                      variant="outline"
                      leftIcon={
                      <Flex>
                        <IoIosNotificationsOutline
                          color="#ffffff"
                          size="1.5rem"
                          me={"0.05rem"}
                        />
                        <Badge borderRadius='full' textAlign='center' ml='-2' boxSize='1.05rem' fontSize='0.8rem' variant='solid' colorScheme="red" color="#ffffff">
                          {notifCount ? notifCount.jumlahNotif : ''}
                        </Badge>
                      </Flex>
                      }
                      rightIcon={<FiChevronDown color="#ffffff" />}
                    ></MenuButton>
                    <MenuList 
                    color='black' 
                    maxW={'var(--chakra-sizes-container-sm)'} 
                    key={notif.notificationId} 
                    maxH='var(--chakra-sizes-container-md)' 
                    overflowY='scroll'>
                    {notif.length > 0 && notif.map(nt=>{
                      return<MenuItem minH='48px'>
                      <Flex gap='3'>
                        <Image
                          boxSize='2rem'
                          borderRadius='full'
                          bg='black'
                          src={notifLogo}
                          alt='SaFly'
                          mr='5px'
                        />

                        <Flex flexDirection='column'>
                           <Text color='red' fontWeight="bold">
                            {nt.title}
                          </Text>               
                          <Text fontSize='0.9rem'>
                            {nt.content}
                          </Text> 
                          <Text color='grey' fontSize='0.7rem' mt='3px'>
                            {`SaFly . ${nt.cdate}`}
                          </Text>  
                        </Flex>
                      </Flex>
                      </MenuItem>
                    })}
                    </MenuList>
                  </Menu>
                  ) : (
                    <></>
                  )}
                </ButtonGroup>

                <HStack spacing="3">
                  {isLoading ? (
                    <Spinner />
                  ) : user ? (
                    <Link to="/profile">
                      <Button variant="link" color="#ffffff">
                        <Text as="b">{`Hello, ${user.fullName}`}</Text>
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Button
                        colorScheme="white"
                        variant="outline"
                        onClick={loginOnOpen}
                      >
                        Login
                      </Button>
                      <Button
                        colorScheme="blue"
                        variant="solid"
                        onClick={registerOnOpen}
                      >
                        Register
                      </Button>
                    </>
                  )}
                </HStack>
              </Flex>
            ) : (
              <Flex gap={"0.5rem"} ml="2rem">
                      {user ? (
                        <Menu spacing="3">
                        <MenuButton
                          as={Button}
                          colorScheme="white"
                          variant="outline"
                          px={"var(--chakra-space-2)"}
                          leftIcon={
                            <Flex>
                              <IoIosNotificationsOutline
                                color="#ffffff"
                                size="1.5rem"
                                me={"0.05rem"}
                              />
                              <Badge borderRadius='full' textAlign='center' ml='-2' boxSize='1.05rem' fontSize='0.8rem' variant='solid' colorScheme="red" color="#ffffff">
                              {notifCount ? notifCount.jumlahNotif : ''}
                              </Badge>
                            </Flex>
                            }
                          rightIcon={<FiChevronDown color="#ffffff" ms={"0rem"} />}
                        ></MenuButton>
                        <MenuList
                          color="black"
                          maxW={"var(--chakra-sizes-60)"}
                          minW={"var(--chakra-sizes-60)"}
                          maxH='30rem' 
                          overflowY='scroll'
                          key={notif.notificationId}
                        >
                          {notif.length > 0 && notif.map(nt=>{
                              return<MenuItem minH='48px'>
                              <Flex gap='3'>
                                <Image
                                  boxSize='2rem'
                                  borderRadius='full'
                                  bg='black'
                                  src={notifLogo}
                                  alt='SaFly'
                                  mr='5px'
                                />
        
                                <Flex flexDirection='column'>
                                   <Text color='red' fontWeight="bold">
                                    {nt.title}
                                  </Text>               
                                  <Text fontSize='0.9rem'>
                                    {nt.content}
                                  </Text> 
                                  <Text color='grey' fontSize='0.7rem' mt='3px'>
                                    {`SaFly . ${nt.cdate}`}
                                  </Text>  
                                </Flex>
                              </Flex>
                              </MenuItem>
                            })}
                        </MenuList>
                      </Menu>
                      ) : (
                        <></>
                      )
                    }
                
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FiMenu />}
                    variant="outline"
                  />
                  <MenuList color="black" fontSize="1.5rem">
                    <MenuItem icon={<FaHome />}>Homepage</MenuItem>
                    <MenuItem icon={<BsBookmarkCheckFill />}>
                      Booked List
                    </MenuItem>
                    <MenuItem icon={<MdOutlinePayment />}>Payment</MenuItem>
                    <MenuItem icon={<FcAbout color="black" />}>
                      About Us
                    </MenuItem>
                    {isLoading ? (
                      <MenuItem as="b">
                        <Spinner />
                      </MenuItem>
                    ) : user ? (
                      <Link to="/profile">
                        <MenuItem as="b">{user.fullName}</MenuItem>
                      </Link>
                    ) : (
                      <>
                        <MenuItem
                          icon={<FiLogIn color="black" />}
                          onClick={loginOnOpen}
                        >
                          Login
                        </MenuItem>
                        <MenuItem
                          icon={<CgLogOut color="black" />}
                          onClick={registerOnOpen}
                        >
                          Register
                        </MenuItem>
                      </>
                    )}
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </HStack>
        </Container>
      </Box>
      <LoginModal
        isOpen={loginIsOpen}
        onClose={loginOnClose}
        authTrigger={authTrigger}
      />
      <RegisterModal
        isOpen={registerIsOpen}
        onClose={registerOnClose}
        authTrigger={authTrigger}
      />
    </Box>
  );
}
