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
  Icon,
} from "@chakra-ui/react";

export const HistoryCard = () => {
  return (
    <Box>
      <Card
        width="535px"
        height="80px"
        left="430px"
        top="155px"
        border="1px solid"
        borderRadius="50px"
        d="flex"
        justifyContent="space-evenly"
        textAlign="center"
        bgColor="#0D4C92"
      >
        {" "}
        <Text
          fontFamily="Martel"
          fontStyle="normal"
          fontWeight="700"
          fontSize="30px"
          color="#FFFFFF"
        >
          Booking History
        </Text>
      </Card>
      <Card top="1px">
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
          <Text
            position="absolute"
            width="132px"
            height="40px"
            left="789px"
            top="9px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="22px"
            lineHeight="40px"
            textAlign="center"
          >
            {" "}
            Rp. 798.989
          </Text>
        </Card>
        <Card
          position="absolute"
          width="926px"
          height="150px"
          left="138px"
          top="288px"
          bgColor="#D9D9D9"
        >
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            Jakarta (CGK)
          </Text>

          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="200px"
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            Bali (DPS){" "}
          </Text>
          <Text
            position="absolute"
            width="155px"
            height="34px"
            left="30px"
            top="40px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            Dewasa 1, Anak 2
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="70px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            3 Desember 2024{" "}
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="100px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            Economy
          </Text>
        </Card>
      </Card>
      <Card top="300px">
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
          <Text
            position="absolute"
            width="132px"
            height="40px"
            left="789px"
            top="9px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="22px"
            lineHeight="40px"
            textAlign="center"
          >
            {" "}
            Rp. 798.989
          </Text>
        </Card>
        <Card
          position="absolute"
          width="926px"
          height="150px"
          left="138px"
          top="288px"
          bgColor="#D9D9D9"
        >
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            Jakarta (CGK)
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="200px"
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            Bali (DPS){" "}
          </Text>
          <Text
            position="absolute"
            width="155px"
            height="34px"
            left="30px"
            top="40px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            Dewasa 1, Anak 2
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="70px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            {" "}
            3 Desember 2024{" "}
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left="30px"
            top="100px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize="19px"
          >
            Economy
          </Text>
        </Card>
      </Card>
    </Box>
  );
};
