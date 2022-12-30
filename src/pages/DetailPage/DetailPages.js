import React from "react";
import DetailPost from "../../components/detailPost/DetailPost";
import { Flex, Button, Box, Image } from "@chakra-ui/react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function DetailPages() {
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
              mt="1.5rem"
              mb="1rem"
            >
              Back to Home
            </Button>
          </Link>
        </Box>
      </Flex>
      <Flex flexDirection="column" height="100%" widht="100%" padding="8">
        <DetailPost />
      </Flex>
    </Box>
  );
}
