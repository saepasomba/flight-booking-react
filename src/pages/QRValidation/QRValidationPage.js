import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsFillXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetQRValidation } from "../../api";
import qs from "qs";

export default function QRValidationPage() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const { bookingToken } = useParams();
  const bookingToken = window.location.search.slice(1).split("=")[1];

  useEffect(() => {
    const fetchData = async (token) => {
      setIsLoading(true);
      try {
        const response = await apiGetQRValidation(token);
        if (response.data.responseCode === 200) {
          setIsValid(true);
        } else if (response.data.responseCode === 204) {
          setIsValid(false);
        }
      } catch (error) {
        setIsValid(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(bookingToken);
  }, []);
  return (
    <>
      <Center
        width={{ base: "90%", lg: "80%" }}
        textAlign="center"
        // bg="red"
        m="2rem auto"
      >
        {isLoading ? (
          <Box>
            <Spinner size="xl" />
            <Text>Validating your token...</Text>
          </Box>
        ) : (
          <Flex
            flexDir="column"
            textAlign="center"
            gap="1rem"
            padding="2rem"
            bg={isValid ? "green.100" : "red.100"}
            borderRadius="1rem"
          >
            {isValid ? (
              <>
                <Center fontSize="5rem">
                  <BsFillCheckCircleFill />
                </Center>
                <Heading>Token Is Valid!</Heading>
                <Box>
                  <Text>
                    Your token has been checked! You may show this page to the
                    officer as confirmation.
                  </Text>
                  <Text color="gray">Token: {bookingToken}</Text>
                </Box>
              </>
            ) : (
              <>
                <Center fontSize="5rem">
                  <BsFillXCircleFill />
                </Center>
                <Heading>Token Is Invalid!</Heading>
                <Box>
                  <Text>
                    Your token is not valid! Please check your token or make
                    sure you have given the correct QR!
                  </Text>
                  <Text color="gray">Token: {bookingToken}</Text>
                </Box>
              </>
            )}
          </Flex>
        )}
      </Center>
    </>
  );
}
