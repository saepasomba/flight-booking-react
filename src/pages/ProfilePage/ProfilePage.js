import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import avatar from "./avatar.jpg";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

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

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(
        "https://tix-service-bej5.up.railway.app/ticketing-service/users/my-profile",
        { headers: { Authorization: localStorage.getItem("USER_TOKEN") } }
      );
      setProfile(response.data.data);
      setIsLoading(false);
    };
    getProfile();
  }, []);

  console.log("profile", profile);
  return (
    <Center h="100vh">
      <Card
        shadow="lg"
        overflow="hidden"
        w={{ lg: "35%", md: "50%", sm: "70%" }}
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
              <Button leftIcon={<FiEdit2 />}>Edit profile</Button>
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
                  {profileItem(
                    "Birth Date",
                    profile?.birthData || "Not available"
                  )}
                </Center>
                <Center>
                  {profileItem(
                    "Phone Number",
                    profile?.phoneNo || "Not available"
                  )}
                </Center>
                <Center>
                  {profileItem("Address", profile?.address || "Not available")}
                </Center>
              </Flex>
            </Flex>
          )}
        </CardBody>
      </Card>
    </Center>
  );
}
