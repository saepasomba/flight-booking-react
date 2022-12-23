import React from "react";
import { Flex, Image, Box, Center } from "@chakra-ui/react";
import backgroundHome from "./backgroundHome.jpg";
import wave from "./wave.svg";
import wave1 from "./wave1.svg";
import wave2 from "./wave2.svg";
import wave3 from "./wave3.svg";
import Navbar from "../../components/navbar/Navbar.js";
import { Footers } from "../../components/footer/Footer.js";
import CardHome from "../../components/card/cardHome.js";
export default function Homepage() {
  return (
    <>
      <Flex
        flexDirection="column"
        height={["150vh", "150vh", "100vh", "100vh"]}
        width="100%"
      >
        <Center>
          <Image
            src={backgroundHome}
            height={"50vh"}
            width="100%"
            objectFit="contain"
          />
        </Center>
        <CardHome />
      </Flex>
    </>
  );
}
