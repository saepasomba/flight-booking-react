import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaSearchLocation,
} from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardHome() {
  return (
    <Card
      padding="0"
      width={["90%", "80%", "80%", "75%"]}
      bg="white"
      border="1px solid whitesmoke"
      alignSelf="center"
      borderRadius="var(--chakra-radii-xl)"
    >
      <CardHeader
        bg="black"
        color="white"
        borderTopLeftRadius="var(--chakra-radii-xl)"
        borderTopRightRadius="var(--chakra-radii-xl)"
        pb="3"
      >
        <Heading size="md">Where will you go ?</Heading>
      </CardHeader>

      <CardBody padding="4">
        <Grid
          templateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(6,1fr)",
          ]}
          gap={["1", "1", "4", "4"]}
        >
          <GridItem
            w="100%"
            width={["100%", "90%", "100%", "100%", "100%"]}
            colSpan={["null", "2", "2", "2"]}
          >
            <Text
              color="#063970"
              size="sm"
              fontWeight="var(--chakra-fontWeights-bold)"
            >
              Dari
            </Text>
            <Select
              border="2px solid #063970"
              borderRadius="var(--chakra-radii-lg)"
              width={["100%", "90%", "100%", "100%"]}
              size={["md", "md", "lg", "lg"]}
              icon={<FaPlaneDeparture />}
              variant="outline"
              color="#063970"
              placeholder="location"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </GridItem>

          <GridItem
            w="100%"
            width={["100%", "90%", "100%", "100%", "100%"]}
            colSpan={["null", "2", "2", "2"]}
          >
            <Text
              color="#063970"
              size="sm"
              fontWeight="var(--chakra-fontWeights-bold)"
            >
              Ke
            </Text>
            <Select
              border="2px solid #063970"
              borderRadius="var(--chakra-radii-lg)"
              width={["100%", "90%", "100%", "100%"]}
              size={["md", "md", "lg", "lg"]}
              icon={<FaPlaneArrival />}
              variant="outline"
              color="#063970"
              placeholder="location"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </GridItem>

          <GridItem w="100%" colSpan={["2", "null", "null", "null"]}>
            <Text
              color="#063970"
              size="sm"
              fontWeight="var(--chakra-fontWeights-bold)"
            >
              Tanggal Pergi
            </Text>
            <Input
              placeholder="Pergi"
              width={["100%", "90%", "90%", "100%"]}
              variant="outline"
              color="#063970"
              border="2px solid #063970"
              borderRadius="var(--chakra-radii-lg)"
              size={["md", "md", "lg", "lg"]}
              type="date"
            />
          </GridItem>

          <GridItem w="100%" colSpan={["2", "null", "null", "null"]}>
            <Text
              color="#063970"
              size="sm"
              fontWeight="var(--chakra-fontWeights-bold)"
            >
              Tanggal Pulang
            </Text>
            <Input
              placeholder="Pergi"
              variant="outline"
              width={["100%", "90%", "90%", "100%"]}
              color="#063970"
              border="2px solid #063970"
              borderRadius="var(--chakra-radii-lg)"
              size={["md", "md", "lg", "lg"]}
              type="date"
            />
          </GridItem>

          <GridItem w="100%" colSpan={2}>
            <Text
              color="#063970"
              size="sm"
              fontWeight="var(--chakra-fontWeights-bold)"
            >
              Seat Class
            </Text>
            <Select
              border="2px solid #063970"
              borderRadius="var(--chakra-radii-lg)"
              width={["100%", "100%", "100%", "100%", "100%"]}
              size={["md", "md", "lg", "lg", "lg"]}
              fontSize={["null", "null", "null", "sm", "null"]}
              icon={<GiAchievement />}
              variant="outline"
              color="#063970"
              placeholder="choose class"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </GridItem>

          <GridItem w="100%" colSpan={2}>
            <Flex gap="4">
              <FormControl>
                <FormLabel color="#063970" mb="0">
                  Adult
                </FormLabel>
                <NumberInput
                  border="1px solid #063970"
                  defaultValue={0}
                  borderRadius="var(--chakra-radii-lg)"
                  size={["md", "md", "lg", "lg"]}
                  max={40}
                  min={0}
                  width={["90%", "90%", "90%", "100%"]}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel color="#063970" mb="0">
                  Child
                </FormLabel>
                <NumberInput
                  border="1px solid #063970"
                  width={["90%", "90%", "90%", "100%"]}
                  defaultValue={0}
                  borderRadius="var(--chakra-radii-lg)"
                  size={["md", "md", "lg", "lg"]}
                  max={40}
                  min={0}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
          </GridItem>

          <GridItem w="100%" colSpan={2}>
            <br />
            <Link to="/search">
              <Button
                leftIcon={<FaSearchLocation />}
                width={["100%", "100%", "100%", "100%"]}
                size="lg"
                color="white"
                bg="#063970"
                variant="solid"
              >
                Cari Penerbangan
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}
