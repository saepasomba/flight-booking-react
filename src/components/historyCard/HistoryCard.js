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
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  FaPlaneDeparture,
  PhoneIcon,
  FaPlaneArrival,
  FaBackward,
} from "react-icons/fa";

export const HistoryCard = () => {
  return (
    <Grid>
      <Card
        width={["60%", "50%", "50%", "50%"]}
        height={["25px", "65px", "65px", "65px"]}
        left={["5%", "15%", "15%", "25%"]}
        top={["100px", "100px", "100px", "100px"]}
        border="1px solid"
        borderRadius="50px"
        d="flex"
        justifyContent="space-evenly"
        textAlign="center"
        bgColor="#063970"
      >
        {" "}
        <Text
          fontFamily="Martel"
          fontStyle="normal"
          fontWeight="700"
          fontSize={["15px", "25px", "25px", "30px"]}
          color="#FFFFFF"
        >
          Booking History
        </Text>
      </Card>
      <Grid>
        <Card
          position="absolute"
          width={["63%", "65%", "65%", "70%"]}
          height={["1100%", "271%", "271%", "271px"]}
          left={["3%", "1%", "1%", "10%"]}
          top={["220px", "220px", "220px", "220px"]}
          bgColor="#ffffff"
          border="1px solid #0D4C92"
          borderRadius="15px  "
          d="flex"
          justifyContent="space-evenly"
        >
          <Text
            position="absolute"
            width={["120px", "150px", "150px", "220px"]}
            left={["3px", "9px", "9px", "9px"]}
            top={["9px", "1px", "1px", "9px"]}
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize={["13px", "15px", "15px", "22px"]}
            lineHeight="40px"
            textAlign="center"
          >
            Booking ID = 098089
          </Text>
          <Text
            position="absolute"
            width={["130px", "130px", "130px", "130px"]}
            height={["40px", "40px", "40px", "40px"]}
            left={["142px", "330px", "400px", "729px"]}
            top={["9px", "1px", "1px", "9px"]}
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize={["13px", "15px", "15px", "22px"]}
            lineHeight="40px"
            textAlign="center"
          >
            {" "}
            Rp. 798.989
          </Text>
        </Card>
        <Card
          position="absolute"
          width={["63%", "65%", "65%", "70%"]}
          height={["150px", "120px", "120px", "150px"]}
          left={["3%", "1%", "1%", "10%"]}
          top={["288px", "260px", "258px", "288px"]}
          bgColor="#D9D9D9"
        >
          <Text
            position="absolute"
            width={["150px", "100px", "100px", "138px"]}
            height={["34px", "34px", "34px", "34px"]}
            left="30px"
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize={["13px", "15px", "15px", "19px"]}
          >
            {" "}
            Jakarta (CGK)
          </Text>
          <Text
            position="absolute"
            width="138px"
            height="34px"
            left={["150px", "150px", "100px", "200px"]}
            top="10px"
            fontFamily="Martel"
            fontStyle="normal"
            fontWeight="700"
            fontSize={["13px", "15px", "15px", "19px"]}
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
            fontSize={["13px", "15px", "15px", "19px"]}
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
            fontSize={["13px", "15px", "15px", "19px"]}
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
            fontSize={["13px", "15px", "15px", "19px"]}
          >
            Economy
          </Text>
        </Card>
      </Grid>
    </Grid>
  );
};
