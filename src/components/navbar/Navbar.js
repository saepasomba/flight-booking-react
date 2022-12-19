import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Tag,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import appLogo from "../../asset/logo-nobg.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiBell } from "react-icons/fi";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [notif, setNotif] = useState([]);
  const [notifCount, setNotifcount] = useState();
  const [isLoadingNotif, setIsLoadingNotif] = useState(false);

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
    } catch (e) {
      setNotifcount(null);
    }
  };

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

      setNotif(data);
    } catch (e) {
      setNotif(null);
    }
  };

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

        const data = response.data.data;
        setUser(data);
      } catch (e) {
        setUser(null);
      }
      setIsLoading(false);
    };
    getProfile(token);

    getCountNotification(token);
  };

  const logout = () => {
    localStorage.removeItem("USER_TOKEN");
    setUser();
  };

  const changeNavBg = () => {
    window.scrollY >= 50 ? setNavActive(true) : setNavActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    const token = localStorage.getItem("USER_TOKEN");
    if (token) {
      authTrigger(token);
    }

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <Center
        w="100vw"
        position="fixed"
        zIndex="1"
        h="5rem"
        transition="150ms ease"
        // bg="bluePrimary.500"
        bg={navActive ? "bluePrimary" : ""}
        boxShadow={navActive ? "dark-lg" : ""}
      >
        <Center width={{ base: "90%", lg: "80%" }} h="100%">
          <Box width="100%">
            <Flex justifyContent="space-between" alignItems="center">
              <Link to="/">
                <Box
                  bg="bluePrimary"
                  borderRadius="0 0 1rem 1rem"
                  filter="auto"
                >
                  <Image
                    src={appLogo}
                    maxH="5rem"
                    objectFit="contain"
                    filter="auto"
                    transition="125ms ease"
                    _hover={{ brightness: "80%" }}
                  />
                </Box>
              </Link>
              <Box m="0 0 0 auto" w="35%">
                {isLoading ? (
                  <Flex justifyContent="flex-end">
                    <Spinner />
                  </Flex>
                ) : !user ? (
                  <Flex gap="1rem" justifyContent="flex-end">
                    <Button
                      colorScheme="whiteHue"
                      variant="link"
                      onClick={loginOnOpen}
                    >
                      Login
                    </Button>
                    <Button
                      colorScheme="whiteHue"
                      variant="link"
                      onClick={registerOnOpen}
                    >
                      Register
                    </Button>
                  </Flex>
                ) : (
                  <Flex gap="1rem" justifyContent="flex-end">
                    <Center position="relative">
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          icon={<FiBell />}
                          colorScheme="whiteHue"
                          variant="link"
                          onClick={() => {
                            const token = localStorage.getItem("USER_TOKEN");
                            getListNotification(token);
                            getCountNotification(token);
                          }}
                          transform="auto"
                          _hover={{ rotate: "10" }}
                        />
                        {notifCount?.jumlahNotif ? (
                          <Text
                            as="b"
                            fontSize="sm"
                            position="absolute"
                            top="0"
                            right="0"
                            color="whitePrimary"
                            cursor="pointer"
                          >
                            {notifCount?.jumlahNotif > 0
                              ? notifCount?.jumlahNotif
                              : ""}
                          </Text>
                        ) : (
                          <></>
                        )}
                        <MenuList>
                          {notif.length > 0 ? (
                            notif.map((nt) => {
                              return (
                                <MenuItem maxW="23rem" key={nt.notificationId}>
                                  <Box>
                                    <HStack>
                                      <Text as="b" noOfLines="2" w="80%">
                                        {nt.title}
                                      </Text>{" "}
                                      {nt.status && (
                                        <Tag colorScheme="green" key="sm">
                                          New!
                                        </Tag>
                                      )}
                                    </HStack>
                                    <Text
                                      color="gray"
                                      noOfLines="2"
                                      fontSize="0.8rem"
                                    >
                                      {nt.content}
                                    </Text>
                                    <Text color="gray" fontSize="0.8rem">
                                      {nt.cdate}
                                    </Text>
                                  </Box>
                                </MenuItem>
                              );
                            })
                          ) : (
                            <MenuItem w="23rem">
                              <Center w="100%">
                                <Spinner />
                              </Center>
                            </MenuItem>
                          )}
                        </MenuList>
                      </Menu>
                    </Center>
                    <Link to="/profile">
                      <Button
                        borderRadius="full"
                        colorScheme="blueHue"
                        leftIcon={
                          <Avatar name={user?.fullName} size="sm" src="" />
                        }
                      >
                        <Text
                          maxWidth="6rem"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          Hi, {user?.fullName.split(" ")[0]}
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                )}
              </Box>
            </Flex>
          </Box>
        </Center>
      </Center>
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
    </>
  );
}
