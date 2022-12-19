import React from "react";
import {
  Flex,
  Image,
  Box,
  Center,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import headerWallpeper from "../../asset/header-wallpaper.jpeg";
import baliImage from "../../asset/bali.jpg";
import nusaPenidaImage from "../../asset/nusa-penida.jpg";
import misc1 from "../../asset/misc-1.jpg";
import misc2 from "../../asset/misc-2.jpg";
import misc3 from "../../asset/misc-3.jpg";
import misc4 from "../../asset/misc-4.jpg";
import misc5 from "../../asset/misc-5.jpg";
import misc6 from "../../asset/misc-6.jpg";
import CardHome from "../../components/card/cardHome.js";

export default function Homepage() {
  return (
    <Box transform="auto" translateY="-5rem">
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
            opacity="0.8"
          >
            Escape the everyday and unwind on vacation.
          </Text>
        </Box>
      </Center>

      <Center
        transform="auto"
        translateY="-50%"
        width={{ base: "90%", lg: "80%" }}
        m="0 auto"
      >
        <CardHome />
      </Center>

      <Center width={{ base: "90%", lg: "80%" }} m="1rem auto">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "75% 25%" }}
          alignItems="center"
          gap="2rem"
        >
          <GridItem>
            <Heading textAlign={{ base: "center", lg: "right" }} mb="1rem">
              🏝 Bali? Say Less!
            </Heading>
            <Text textAlign="justify">
              Bali is a tropical paradise located in Indonesia, known for its
              beautiful beaches, stunning temples, and lush green rice terraces.
              It's a popular destination for travelers looking to relax,
              rejuvenate, and explore new cultures. There's so much to see and
              do, from surfing and snorkeling to hiking and visiting temples.
              The island is also home to a vibrant arts and crafts scene and a
              wide range of cuisines. Consider visiting Bali for a memorable
              vacation.
            </Text>
          </GridItem>
          <GridItem
            justifySelf={{ base: "center", lg: "end" }}
            order={{ base: "-1", lg: "1" }}
          >
            <Image
              src={baliImage}
              w="15rem"
              h="20rem"
              objectFit="cover"
              borderRadius="1rem"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Center>

      <Center width={{ base: "90%", lg: "80%" }} m="1rem auto">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "25% 75%" }}
          alignItems="center"
          gap="2rem"
        >
          <GridItem
            justifySelf={{ base: "center", lg: "start" }}
            order={{ base: "-1", lg: "-1" }}
          >
            <Image
              src={nusaPenidaImage}
              w="15rem"
              h="20rem"
              objectFit="cover"
              borderRadius="1rem"
              boxShadow="lg"
            />
          </GridItem>
          <GridItem>
            <Heading textAlign={{ base: "center", lg: "left" }} mb="1rem">
              🌊 Explore Nusa Penida!
            </Heading>
            <Text textAlign="justify">
              Nusa Penida is a small island located southeast of Bali,
              Indonesia. It's known for its rugged, natural beauty and is a
              popular destination for travelers looking to escape the crowds.
              The island is home to a number of stunning beaches and
              breathtaking viewpoints, as well as cultural and historical
              landmarks. It's a great destination for those looking for a more
              authentic and off-the-beaten-path experience in Bali. Just be sure
              to bring sunscreen and a hat, as the island can get quite hot and
              sunny.
            </Text>
          </GridItem>
        </Grid>
      </Center>
      <Box width={{ base: "90%", lg: "80%" }} m="5rem auto">
        <Heading textAlign="center" mb="2rem">
          More Great Places Ahead!
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
          {[
            { image: misc1, label: "Rio de Janeiro" },
            { image: misc2, label: "Japan" },
            { image: misc3, label: "Hawaii" },
            { image: misc4, label: "Iceland" },
            { image: misc5, label: "Switzerland" },
            { image: misc6, label: "Sahara Desert" },
          ].map((item, index) => {
            return (
              <Center position="relative" role="group">
                <Image
                  index={index}
                  src={item.image}
                  w="20rem"
                  h="15rem"
                  objectFit="cover"
                  borderRadius="1rem"
                  boxShadow="lg"
                  transition="150ms ease"
                  filter="auto"
                  _groupHover={{
                    boxShadow: "dark-lg",
                    brightness: "0.5",
                  }}
                />
                <Text
                  position="absolute"
                  color="whitePrimary"
                  opacity="0"
                  transition="150ms ease"
                  _groupHover={{ opacity: "1" }}
                  as="b"
                  fontSize="1.5rem"
                >
                  {item.label}
                </Text>
              </Center>
            );
          })}
        </Flex>
      </Box>
      <Box width={{ base: "90%", lg: "80%" }} m="5rem auto 0">
        <Heading textAlign="center">Explore The World!</Heading>
        <Text textAlign="center">
          Adventure is out there. Are you ready to take on the challenge?
        </Text>
      </Box>
    </Box>
  );
}
