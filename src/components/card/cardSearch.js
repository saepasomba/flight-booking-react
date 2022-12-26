import {
  Flex,
  Text,
  Center,
  Divider,
  Stack,
  Button,
  Image,
  Box,
  AlertDialog,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { GiAchievement, GiDiscGolfBag } from "react-icons/gi";
import { TiArrowBack } from "react-icons/ti";
import { MdAirplanemodeActive } from "react-icons/md";
import bgpesawat from "../../asset/bgpesawat.jpg";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";

export default function CardSearchs({ flight, searchParams }) {
  const dataToPass = { ...searchParams, ...flight };
  const {
    isOpen: authAlertIsOpen,
    onOpen: authAlertOnOpen,
    onClose: authAlertOnClose,
  } = useDisclosure();
  const navigate = useNavigate();

  const paramStringified = qs.stringify(dataToPass);

  const bookOrderClicked = () => {
    let USER_TOKEN = localStorage.getItem("USER_TOKEN");
    if (USER_TOKEN) {
      navigate(`/booking-order?${paramStringified}`);
    } else {
      authAlertOnOpen();
    }
  };
  return (
    <>
      <Card
        padding="0"
        width={["95%", "80%", "80%", "75%"]}
        bg="white"
        border="1px solid whitesmoke"
        alignSelf="center"
        borderRadius="var(--chakra-radii-lg)"
        mb="1rem"
        height="75%"
      >
        <Stack direction={["column", "column", "row", "row"]}>
          <Flex
            bg="#063970"
            color="white"
            borderTopLeftRadius="var(--chakra-radii-lg)"
            borderTopRightRadius="var(--chakra-radii-lg)"
            borderBottomLeftRadius="var(--chakra-radii-lg)"
            borderBottomRightRadius="var(--chakra-radii-lg)"
            width={["100%", "100%", "30vw", "25vw"]}
            justifyContent={"center"}
            alignItems="center"
            padding={["1rem", "1rem", "1rem", "0"]}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
              gap="1"
            >
              <Image
                boxSize={["3rem", "3rem", "4.5rem", "4.5rem"]}
                borderRadius="full"
                src={bgpesawat}
                alt="SaFly"
              />
              <Text
                textAlign="center"
                fontSize={["sm", "sm", "md", "md"]}
                fontFamily="heading"
                fontWeight="extrabold"
              >
                {flight.airplane}
              </Text>
            </Flex>
          </Flex>

          <Divider
            borderColor="black"
            border="2px solid black"
            orientation={["horizontal", "horizontal", "vertical", "vertical"]}
          />

          <Box
            padding="4"
            color="black"
            width={["100%", "100%", "50vw", "50vw"]}
          >
            <Flex justifyContent="space-between" mb="0.5rem">
              <Text fontFamily="heading" fontWeight="semibold">
                {flight.flight}
              </Text>
              <Text fontFamily="heading" fontWeight="semibold">
                {flight.scheduleId}
              </Text>
            </Flex>

            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems="center"
              gap={["0.2rem", "0.2rem", "0.5rem", "0.5rem"]}
              fontFamily="sans-serif"
            >
              <Text fontSize={["sm", "sm", "md", "md"]}>
                {flight.startTime}
              </Text>
              <Divider borderColor="#063970" border="2px solid #063970" />
              <MdAirplanemodeActive size={"4.5rem"} color="black" />
              <Divider borderColor="#063970" border="2px solid #063970" />
              <Text fontSize={["sm", "sm", "md", "md"]}>{flight.endTime}</Text>
            </Flex>
            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              mb="1rem"
              fontFamily="sans-serif"
            >
              <Text fontSize={["sm", "sm", "md", "md"]}>
                {flight.departureCity}
              </Text>
              <Text fontSize={["sm", "sm", "md", "md"]}>Direct</Text>
              <Text fontSize={["sm", "sm", "md", "md"]}>
                {flight.destinationsCity}
              </Text>
            </Flex>

            <Flex gap="3" mb="0.5rem" fontFamily="sans-serif">
              <GiAchievement size="1.5rem" color="black" />
              <Text>{flight.classType}</Text>
            </Flex>

            <Flex gap="3" mb="0.5rem" fontFamily="sans-serif">
              <GiDiscGolfBag size="1.5rem" color="black" />
              <Text>{flight.luggageCapacity}</Text>
            </Flex>
          </Box>

          <Divider
            borderColor="black"
            border="2px solid black"
            orientation={["horizontal", "horizontal", "vertical", "vertical"]}
          />

          <Flex
            bg="#063970"
            color="white"
            borderTopLeftRadius="var(--chakra-radii-lg)"
            borderTopRightRadius="var(--chakra-radii-lg)"
            borderBottomLeftRadius="var(--chakra-radii-lg)"
            borderBottomRightRadius="var(--chakra-radii-lg)"
            width={["100%", "100%", "20vw", "25vw"]}
            fontFamily="sans-serif"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="2"
              padding={["1rem", "1rem", "1rem", "0"]}
            >
              <Text
                fontWeight="extrabold"
                textAlign="center"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {flight.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
                <Text as="span" color="blueHue.200" fontSize="sm">
                  {" "}
                  /pax
                </Text>
              </Text>
              {/* <Link to={`/booking-order?${paramStringified}`}> */}
              <Button
                size={["sm", "sm", "sm", "md"]}
                leftIcon={<TiArrowBack />}
                colorScheme="whiteHue"
                color="white"
                variant="outline"
                onClick={bookOrderClicked}
              >
                Book Flight
              </Button>
              {/* </Link> */}
            </Flex>
          </Flex>
        </Stack>
      </Card>
      <AlertDialog isOpen={authAlertIsOpen} onClose={authAlertOnClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              You need to be authenticated to do this action!
            </AlertDialogHeader>
            <AlertDialogBody>
              You are currently not authenticated. Please{" "}
              <Text as="b">log in</Text> to your account or{" "}
              <Text as="b">create new account</Text> on the top right of the
              screen.
            </AlertDialogBody>
            <AlertDialogFooter gap="1rem">
              <Button
                variant="ghost"
                colorScheme="blueHue"
                onClick={authAlertOnClose}
              >
                Okay
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
