import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
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
import { FiBell } from "react-icons/fi";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import {
  apiGetCountNotification,
  apiGetListNotification,
  apiGetProfile,
} from "../../api";

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
      const response = await apiGetCountNotification;
      const data = response.data.data;
      setNotifcount(data);
    } catch (e) {
      setNotifcount(null);
    }
  };

  const getListNotification = async (token) => {
    try {
      setIsLoadingNotif(true);
      const response = await apiGetListNotification();
      const data = response.data.data;

      setNotif(data);
    } catch (e) {
      setNotif(null);
    } finally {
      setIsLoadingNotif(false);
    }
  };

  const authTrigger = (token) => {
    const getProfile = async () => {
      setIsLoading(true);
      try {
        const response = await apiGetProfile();

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
              <Box m="0 0 0 auto" w="">
                <Button colorScheme="red">Logout</Button>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Center>
    </>
  );
}
