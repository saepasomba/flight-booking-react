import React from "react";
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
import GarudaIndonesia from "../../pages/Homepage/GarudaIndonesia.png";

import conneting from "../../pages/Homepage/connecting-200w.png";
import qr from "../../pages/Homepage/qr-200h.png";


export default function DetailPost() {
  return (
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
            INV-MPW-221209-13824
          </Heading>
          <Text textAlign="start" color="white" marginLeft={['10']}>
            2022-12-09 13:08:24
          </Text>
        </Flex>
      </CardHeader>
 
      <CardBody padding="4" color="black">
        <Flex
          flexDirection={["row", "row", "row", "row"]}
          justifyContent={["center", "center", "center", "Center"]}
          mb="1rem"
        >
          <Text>Monday, 19 December 2022 </Text>
        </Flex>
        <Flex>
          <Grid>
            <Image
              marginLeft={["2", "2", "2", "5"]}
              src={GarudaIndonesia}
              height={"10vh"}
            />
            <Text marginLeft={["5", "5", "5", "9"]} fontSize={["10", "10", "5", "12"]}>
              Boeing 777-30GER
            </Text>
            <Text marginLeft={["5", "5", "10", "12"]} fontSize={["10", "10", "5", "12"]}>
               Business Class
            </Text>
          </Grid>
          <Grid marginLeft={["8", "8", "8", "4"]} templateRows="repeat(2, 1fr)">
            <GridItem>19.00</GridItem>
            <GridItem>21.00</GridItem>
          </Grid>
          <Image
            src={conneting}
            height={{
              base: '100%', // 0-48em
              md: '50%', // 48em-80em,
              xl: '25%', // 80em+
            }}
            marginTop={["1"]}
            marginLeft={["4", "4", "4", "2"]}
          ></Image>
          <Grid marginLeft={["3"]} templateRows="repeat(2, 1fr)">
            <GridItem>Jakarta</GridItem>
            <GridItem>Jeddah</GridItem>
          </Grid>
          <Grid marginLeft={["2", "4", "4", "80"]}>
            <GridItem >Booking Code</GridItem>
            <Image src={qr} height={["8vh", "8vh", "8vh", "15vh"]}></Image>
          </Grid>
        </Flex>
        <HStack bg="whitesmoke">
          <Divider borderColor="#063970" border="3px solid #063970" />
        </HStack>
        <Flex>
          <Box p="4">
            <Text>Book By : Dodo</Text>
            <Text> Total Person : 2</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <Grid>
              <Text>Payment Type : Transfer Bank BCA </Text>
              <Text>Total Amount : Rp. 998.000 </Text>
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
              <Tr>
                <Td>Tn. Jhon</Td>
                <Td>Anak - Anak</Td>
                <Td>A1</Td>
                <Td>50</Td>
              </Tr>
              <Tr>
                <Td>Tn. Alpin</Td>
                <Td>Dewasa</Td>
                <Td>A20</Td>
                <Td>50</Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}
 