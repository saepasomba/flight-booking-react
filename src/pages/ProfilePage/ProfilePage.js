import {
  Box,
  Card,
  CardBody,
  Center,
  Circle,
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

const profileItem = (label, value) => {
  return (
    <Grid
      templateColumns="30% 70%"
      gap="1rem"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <GridItem textAlign="right">
        <Text as="b">{label}</Text>
      </GridItem>
      <GridItem>
        <Text>{value}</Text>
      </GridItem>
    </Grid>
  );
};

export default function ProfilePage() {
  return (
    <Center>
      <Card
        w={{ base: "80%", lg: "50rem" }}
        align="center"
        marginY="2rem"
        boxShadow="lg"
      >
        <CardBody w="100%">
          <Grid
            templateColumns={{ sm: "1fr", lg: "20% 80%" }}
            gap={{ sm: "1rem", lg: "0" }}
            m="0 auto"
          >
            <GridItem justifySelf="center">
              <Circle size="10rem" overflow="hidden">
                <Image src={avatar} objectFit="cover" />
              </Circle>
            </GridItem>

            <GridItem>
              <VStack>
                {profileItem("Nama", "Lorem Ipsum")}
                {profileItem("Tanggal lahir", "24 Februari 2002")}
                {profileItem("Umur", "25 tahun")}
                {profileItem("Jenis Kelamin", "Laki-laki")}
                {profileItem(
                  "Alamat",
                  "Mandor Goweng No. 08 RT RT Sekian Kecamatan Mantap"
                )}
              </VStack>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Center>
  );
}
