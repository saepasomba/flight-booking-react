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
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import avatar from "./avatar.jpg";
import { FiEdit2 } from "react-icons/fi";

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
  return (
    <Center h="100vh">
      <Card
        shadow="xl"
        overflow="hidden"
        w={{ lg: "35%", md: "50%", sm: "70%" }}
        borderRadius="xl"
      >
        <CardHeader
          bg="#063970"
          borderRadius="0 0 50px 50px"
          textAlign="center"
          shadow="lg"
        >
          <Heading color="white">Profile</Heading>
        </CardHeader>
        <CardBody>
          <Flex flexDir="column" alignItems="center" gap="2rem">
            <Avatar size="xl" name="Dadang Suparjo" />
            <Button leftIcon={<FiEdit2 />}>Edit profile</Button>
            <Divider />
            <Flex flexDir="column" gap="1rem">
              <Center>{profileItem("Fullname", "Dadang Suparjo")}</Center>
              <Center>{profileItem("Email", "dadang@gmail.com")}</Center>
              <Center>{profileItem("Birth Date", "Not available")}</Center>
              <Center>{profileItem("Phone Number", "Not available")}</Center>
              <Center>{profileItem("Address", "Not available")}</Center>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
}
