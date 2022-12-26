import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "./404 error lost in space-cuate.svg";

export default function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="cente" wrap="wrap">
      <Image src={notFoundImage} w="25rem" />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text>Oh no! You have gone too far 😰</Text>
        <Link to="/">
          <Button variant="ghost" colorScheme="blueHue">
            Back to homepage
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
