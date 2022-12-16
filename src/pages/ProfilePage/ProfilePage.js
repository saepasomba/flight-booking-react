import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import ProfileForm from "./ProfileForm";
import { useNavigate } from "react-router-dom";

const profileItem = (label, value) => {
  return (
    <Box textAlign="center">
      <Text fontSize="sm" color="gray">
        {label}
      </Text>
      <Text fontSize="lg">{value}</Text>
    </Box>
  );
};

const LogoutConfirmModal = (props) => {
  const {
    isOpen: logoutModalIsOpen,
    onClose: logoutModalOnClose,
    onSubmit,
  } = props;

  return (
    <Modal isOpen={logoutModalIsOpen} onClose={logoutModalOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Leave already? 😭</ModalHeader>
        <ModalBody>
          <Text>
            Are you sure to log out? You will need to log in again later.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Flex gap="1rem">
            <Button onClick={logoutModalOnClose}>Cancel</Button>
            <Button colorScheme="red" onClick={onSubmit}>
              Logout
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    isOpen: editModalIsOpen,
    onOpen: editModalOnOpen,
    onClose: editModalOnClose,
  } = useDisclosure();
  const {
    isOpen: logoutModalIsOpen,
    onOpen: logoutModalOnOpen,
    onClose: logoutModalOnClose,
  } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const getProfile = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://tix-service-bej5.up.railway.app/ticketing-service/users/my-profile",
      { headers: { Authorization: localStorage.getItem("USER_TOKEN") } }
    );
    setProfile(response.data.data);
    console.log(response);
    setIsLoading(false);
  };

  const logoutSubmit = () => {
    localStorage.removeItem("USER_TOKEN");
    toast({
      title: "Logged out!",
      position: "top",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Center h="100vh">
        <Card
          shadow="lg"
          overflow="hidden"
          w={{ base: "95%", sm: "95%", md: "50%", lg: "40%" }}
          borderRadius="xl"
          transition="500ms ease"
          variant="outline"
          _hover={{
            shadow: "2xl",
          }}
        >
          <CardHeader
            bg="#063970"
            borderRadius="0 0 999px 999px"
            textAlign="center"
            shadow="lg"
          >
            <Heading color="white">Profile</Heading>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <Center>
                <Spinner />
              </Center>
            ) : (
              <Flex flexDir="column" alignItems="center" gap="1rem">
                <Avatar
                  size="lg"
                  name={profile?.fullName || "Not available"}
                  transition="500ms ease"
                  cursor="default"
                  _hover={{ transform: "scale(1.2)" }}
                />
                <Button leftIcon={<FiEdit2 />} onClick={editModalOnOpen}>
                  Edit profile
                </Button>
                <Divider />
                <Flex flexDir="column" gap="1rem">
                  <Center>
                    {profileItem(
                      "Fullname",
                      profile?.fullName || "Not available"
                    )}
                  </Center>
                  <Center>
                    {profileItem("Email", profile?.email || "Not available")}
                  </Center>
                  <Center>
                    {profile?.birthDate
                      ? profileItem(
                          "Birth Date",
                          new Date(profile?.birthDate).toLocaleDateString(
                            "en-GB",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                        )
                      : profileItem("Birth Date", "Not available")}
                  </Center>
                  <Center>
                    {profileItem(
                      "Phone Number",
                      profile?.phoneNo || "Not available"
                    )}
                  </Center>
                  <Center>
                    {profileItem(
                      "Address",
                      profile?.address || "Not available"
                    )}
                  </Center>
                </Flex>
              </Flex>
            )}
          </CardBody>
          <Divider />
          <CardFooter justify="center">
            <Button
              colorScheme="red"
              variant="ghost"
              leftIcon={<BiLogOut />}
              onClick={logoutModalOnOpen}
            >
              Logout
            </Button>
          </CardFooter>
        </Card>
      </Center>
      <ProfileForm
        isOpen={editModalIsOpen}
        onClose={editModalOnClose}
        profile={profile}
        refetchProfile={getProfile}
      />
      <LogoutConfirmModal
        isOpen={logoutModalIsOpen}
        onClose={logoutModalOnClose}
        onSubmit={logoutSubmit}
      />
    </>
  );
}
