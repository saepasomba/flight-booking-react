import React from "react";
import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import CardHistorybook from "../../components/card/cardHistorybook";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function HistoryBookPage() {
  return (
    <Box>
      <Flex flexDirection="column">
        <Box pl={["0.5rem", "0.5rem", "3rem", "3rem"]} alignSelf="flex-start">
          <Link to="/">
            <Button
              size={["sm", "sm", "md", "md"]}
              leftIcon={<TiArrowBack />}
              color="white"
              bg="#063970"
              variant="solid"
              mt='1.5rem'
              mb="1rem"
            >
              Back to Home
            </Button>
          </Link>
        </Box>

        <Box
          alignSelf="center"
          justifyContent="center"
          bg="#063970"
          borderRadius="var(--chakra-radii-lg)"
          width={["45%", "45%", "30%", "30%"]}
          color="white"
          height={["2rem", "2rem", "4rem", "4rem"]}
          padding={["1", "1", "2", "2"]}
        >
          <Text fontSize={["1rem", "1rem", "2rem", "2rem"]} textAlign="center">
            Booking History
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection="column" height="100%" widht="100%" padding="8">
        <CardHistorybook />
      </Flex>
    </Box>
  );
}
