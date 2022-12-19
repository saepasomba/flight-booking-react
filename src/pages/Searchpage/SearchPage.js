import React from "react";
import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import CardSearchs from "../../components/card/cardSearch";
import bgpesawat from "../../asset/bgpesawat.jpg";
import Navbar from "../../components/navbar/Navbar.js";

export default function SearchPages() {
  return (
    <>
      <Navbar />
      <Flex flexDirection="column">
        <Image src={bgpesawat} height={"60vh"} widht="100%" />
        <Box alignSelf="center">
          <Text
            fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]}
            color="grey"
            fontFamily="sans-serif"
            fontWeight="semibold"
          >
            SEARCH RESULT
          </Text>
        </Box>

        <Flex
          flexDirection="column"
          ms="2rem"
          me="2rem"
          height="100%"
          widht="100%"
          pb="2rem"
        >
          <CardSearchs />
          <CardSearchs />
          <CardSearchs />
          <CardSearchs />
        </Flex>
      </Flex>
    </>
  );
}
