import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  HStack,
  Divider,
  Image,
  Flex,
  Text,
  Spinner,
  Center,
  Grid,
  GridItem,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import GarudaIndonesia from "../../asset/garuda-200h.png";
import conneting from "../../asset/connecting-200w.png";
import qr from "../../asset/qr-200h.png";
import axios from "axios";

export default function DetailPost() {
  const [details, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let {param} = useParams();

  const render_numeric = (value) => {
    let numbers = Number(value);
    return numbers?.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  const getDetailhistory = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://tix-service-bej5.up.railway.app/ticketing-service/booking/history-detail/${param}`,
      { headers: { Authorization: localStorage.getItem("USER_TOKEN") } }
    );
    setDetail(response.data.data);
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetailhistory();
  }, []);

  return (
    <>
    {isLoading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
    ) : details ? (
      <Card
      borderColor="black"
      padding="0"
      width={["95%", "80%", "80%", "55%"]}
      bg="white"
      border="1px solid whitesmoke"
      alignSelf="center"
      borderRadius="var(--chakra-radii-xl)"
      mb="1rem"
      size="sm"
    >
      <CardHeader bg="#063970" borderRadius="9px 9px 9px 9px">
        <Flex
          flexDirection={["row", "row", "row", "row"]}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
        >
          <Heading
            color="white"
            textAlign={["start", "start", "null", "null"]}
            size={["sm", "sm", "md", "md"]}
            mb={["1", "1", "0", "0"]}
          >
            {details.invoiceNo ? details.invoiceNo : " "}
          </Heading>
          <Text textAlign="start" color="white" marginLeft={["10"]}>
          {details.paymentDate ? details.paymentDate : " "}
          </Text>
        </Flex>
      </CardHeader>

      <CardBody padding="4" color="black">
        <Flex
          flexDirection={["row", "row", "row", "row"]}
          justifyContent={["center", "center", "center", "Center"]}
          mb="1rem"
        >
          <Text>{details.flightDate ? details.flightDate : " "}</Text>
        </Flex>
        <Flex>
          <Grid>
            <Image
              marginLeft={["2", "2", "2", "5"]}
              src={GarudaIndonesia}
              height={"5vh"}
            />
            <Text
              marginLeft={["5", "5", "5", "9"]}
              fontSize={["10", "10", "5", "12"]}
            >
              {details.airplane ? details.airplane : " "}
            </Text>
            <Text
              marginLeft={["5", "5", "10", "12"]}
              fontSize={["10", "10", "5", "12"]}
            >
              {details.classType ? details.classType : " "}
            </Text>
          </Grid>
          <Grid marginLeft={["8", "8", "8", "4"]} templateRows="repeat(2, 1fr)">
            <GridItem>{details.startTime ? details.startTime : " "}</GridItem>
            <GridItem>{details.endTime ? details.endTime : " "}</GridItem>
          </Grid>
          <Image
            src={conneting}
            height={{
              base: "100%", // 0-48em
              md: "50%", // 48em-80em,
              xl: "25%", // 80em+
            }}
            marginTop={["1"]}
            marginLeft={["4", "4", "4", "6"]}
          ></Image>
          <Grid marginLeft={["3"]} templateRows="repeat(2, 1fr)">
            <GridItem>
              <Flex flexDirection='column'>
                <Text>
                {details.departureCity ? details.departureCity : " "}
                </Text>
                <Text>
                {details.departureAirport ? details.departureAirport : " "}
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection='column'>
                <Text>
                {details.destinationsCity ? details.destinationsCity : " "}
                </Text>
                <Text>
                {details.destinationsAirport ? details.destinationsAirport : " "}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
          <Grid marginLeft={["2", "4", "4", "8"]}>
            <GridItem textAlign='center' fontWeight='semibold' >QR Code</GridItem>
            <Image src={details.qrCodeUrl ? details.qrCodeUrl : " "} />
          </Grid>
        </Flex>
        <HStack bg="whitesmoke">
          <Divider borderColor="#063970" border="3px solid #063970" />
        </HStack>
        <Flex>
          <Box p="4">
            <Text>{`booking by:  ${details.bookingBy ? details.bookingBy : " "}`}</Text>
            <Text> {`Total Person: ${details.totalPerson ? details.totalPerson : " "} Person`}</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <Grid>
              <Text>{`Payment Type :  ${details.paymentName ? details.paymentName : " "}`}</Text>
              <Text>{" "}{`Total Amount : ${details.amount ? render_numeric(details.amount) : " " }`}{" "} </Text>
            </Grid>
          </Box>
        </Flex>
        <HStack bg="whitesmoke">
          <Divider borderColor="#063970" border="3px solid #063970" />
        </HStack>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Seat Number</Th>
                <Th>Baggage</Th>
              </Tr>
            </Thead>
            <Tbody>
              {details && details.detail ? details.detail.map((det, index)=>{
                return(
                  <Tr key={index}>
                    <Td>{det.name}</Td>
                    <Td>{det.type}</Td>
                    <Td>{det.seatsNumber}</Td>
                    <Td>{det.luggageCapacity}</Td>
                  </Tr>
                )
              }) : " NO DATA DETAIL PERSON "}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
    ) : (
      <Box alignSelf="center">
          <Text color="#063970">
            <h1 color>History Booking Not Found</h1>
          </Text>
        </Box>
    )
    }
    </>
  );
}
