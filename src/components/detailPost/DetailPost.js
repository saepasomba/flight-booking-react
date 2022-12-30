import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  VStack,
  Circle,
  Button,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import conneting from "../../asset/connecting-200w.png";
import axios from "axios";
import { apiGetDetailHistory } from "../../api";

export default function DetailPost() {
  const [details, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { param } = useParams();

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
    const response = await apiGetDetailHistory(param);
    setDetail(response.data.data);
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

          <CardBody color="black">
            <Text textAlign="center">
              {details.flightDate ? details.flightDate : " "}
            </Text>
            <Grid
              gridTemplateColumns={{ base: "1fr", lg: "30% 70%" }}
              mt="2rem"
              gap="1rem"
            >
              <Flex flexDir="column" gap="1rem">
                <Flex flexDir="column">
                  <Text color="gray">Airplane</Text>
                  <Text>{details.airplane ? details.airplane : " "}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="gray">Class</Text>
                  <Text>{details.classType ? details.classType : " "}</Text>
                </Flex>
              </Flex>

              <Grid templateColumns="20% 10% 70%" alignItems="center">
                <GridItem textAlign="end">
                  {details.startTime ? details.startTime : " "}
                </GridItem>
                <GridItem>
                  <Flex flexDir="column" align="center">
                    <Circle bg="bluePrimary" size="1.5rem" />
                    <Box w={"1.5px"} h="2.5rem" bg="black" />
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex flexDirection="column">
                    <Text>
                      {details.departureCity ? details.departureCity : " "}
                    </Text>
                    <Text fontSize="xs">
                      {details.departureAirport
                        ? details.departureAirport
                        : " "}
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem textAlign="end">
                  {details.endTime ? details.endTime : " "}
                </GridItem>
                <GridItem>
                  <Flex flexDir="column" align="center">
                    <Box w={"1.5px"} h="2.5rem" bg="black" />
                    <Circle
                      border="1px"
                      borderColor="bluePrimary"
                      size="1.5rem"
                    />
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex flexDirection="column">
                    <Text>
                      {details.destinationsCity
                        ? details.destinationsCity
                        : " "}
                    </Text>
                    <Text fontSize="xs">
                      {details.destinationsAirport
                        ? details.destinationsAirport
                        : " "}
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
            </Grid>
            <Center mt="2rem">
              <Flex
                flexDir="column"
                justifyContent="center"
                textAlign="center"
                w="10rem"
              >
                <Text>QR Code</Text>
                <Image
                  src={details.qrCodeUrl ? details.qrCodeUrl : " "}
                  objectFit="contain"
                />
              </Flex>
            </Center>
            <HStack bg="whitesmoke">
              <Divider borderColor="#063970" border="3px solid #063970" />
            </HStack>
            <Flex>
              <Box p="4" weight={[""]}>
                <Text fontSize={["", "", "", ""]}>{`booking by :  ${
                  details.bookingBy ? details.bookingBy : " "
                }`}</Text>
                <Text>
                  {" "}
                  {`Total Person : ${
                    details.totalPerson ? details.totalPerson : " "
                  } Person`}
                </Text>
              </Box>
              <Spacer />
              <Box p="4">
                <Grid>
                  <Text>{`Payment Type :  ${
                    details.paymentName ? details.paymentName : " "
                  }`}</Text>
                  <Text>
                    {" "}
                    {`Total Amount : ${
                      details.amount ? render_numeric(details.amount) : " "
                    }`}{" "}
                  </Text>
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
                    <Th>Travel Docs</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {details && details.detail
                    ? details.detail.map((det, index) => {
                        return (
                          <Tr key={index}>
                            <Td>{det.name}</Td>
                            <Td>{det.type}</Td>
                            <Td textAlign="center">{det.seatsNumber}</Td>
                            <Td textAlign="center">{det.luggageCapacity}</Td>
                            <Td textAlign="center">
                              {det.travelDocument ? (
                                <>
                                  <Popover>
                                    <PopoverTrigger>
                                      <Button
                                        variant="ghost"
                                        colorScheme="blueHue"
                                      >
                                        Travel Document
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                      <PopoverArrow />
                                      <PopoverCloseButton />
                                      <PopoverHeader>
                                        Travel document for {det.name}
                                      </PopoverHeader>
                                      <PopoverBody>
                                        <Flex flexDir="column" gap="1rem">
                                          <Box>
                                            <Text color="gray">
                                              Passport Number
                                            </Text>
                                            <Text>
                                              {
                                                det.travelDocument
                                                  .passportNumber
                                              }
                                            </Text>
                                          </Box>
                                          <Box>
                                            <Text color="gray">
                                              Issuing Country
                                            </Text>
                                            <Text>
                                              {
                                                det.travelDocument
                                                  .issuingCountry
                                              }
                                            </Text>
                                          </Box>
                                          <Box>
                                            <Text color="gray">
                                              Expiration Date
                                            </Text>
                                            <Text>
                                              {
                                                det.travelDocument
                                                  .expirationDate
                                              }
                                            </Text>
                                          </Box>
                                        </Flex>
                                      </PopoverBody>
                                    </PopoverContent>
                                  </Popover>
                                </>
                              ) : (
                                "N/A"
                              )}
                            </Td>
                          </Tr>
                        );
                      })
                    : " NO DATA DETAIL PERSON "}
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
      )}
    </>
  );
}
