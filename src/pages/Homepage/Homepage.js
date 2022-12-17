import React from "react";
import { Flex, Image, Box, Center, Heading, Text } from "@chakra-ui/react";
import headerWallpeper from "../../asset/header-wallpaper.jpeg";
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
        transform="auto"
        translateY="-5rem"
      >
        <Center position="relative">
          <Image
            src={headerWallpeper}
            width="100vw"
            height="80vh"
            objectFit="cover"
            filter="auto"
            brightness="85%"
          />
          <Box
            width={{ base: "90%", lg: "80%" }}
            position="absolute"
            top={{ base: "35%", lg: "50%" }}
            transform="auto"
            translateY="-50%"
          >
            <Heading
              fontSize={{ base: "1.5rem", lg: "2.5rem" }}
              w={{ base: "80%", lg: "60%" }}
              color="whitePrimary"
              role="group"
              cursor="default"
            >
              Escape the{" "}
              <Text
                as="span"
                transition="150ms ease"
                _groupHover={{
                  color: "bluePrimary",
                }}
              >
                ordinary
              </Text>
              , embrace the{" "}
              <Text
                as="span"
                transition="150ms ease"
                _groupHover={{
                  color: "bluePrimary",
                }}
              >
                extraordinary
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "1rem", lg: "1.5rem" }}
              w={{ base: "80%", lg: "60%" }}
              color="whitePrimary"
              role="group"
              cursor="default"
              opacity="0.7"
            >
              Escape the everyday and unwind on vacation.
            </Text>
          </Box>
        </Center>
        <Center transform="auto" translateY="-50%">
          <CardHome />
        </Center>
      </Flex>
    </>
  );
}
