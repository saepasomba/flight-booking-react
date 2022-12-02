import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Container,
  Box,
  Image,
  Badg,
  Center,
  ChakraProvider,
} from "@chakra-ui/react";

export const HistoryCard = () => {
  return (
    <Card>
      <Card
        position="absolute"
        width="926px"
        height="271px"
        left="138px"
        top="225px"
        bgColor="#ffffff"
        border="1px solid #0D4C92"
        borderRadius="15px"
        d="flex"
        justifyContent="space-evenly"
      >
        <Text
          position="absolute"
          width="220px"
          left="9px"
          top="9px"
          fontFamily="Martel"
          fontStyle="normal"
          fontWeight="700"
          fontSize="22px"
          lineHeight="40px"
          textAlign="center"
        >
          Booking ID = 098089
        </Text>
      </Card>
      <Card
        position="absolute"
        width="926px"
        height="150px"
        left="138px"
        top="288px"
        bgColor="#D9D9D9"
      ></Card>
    </Card>
  );
};
