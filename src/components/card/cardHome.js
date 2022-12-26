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
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  apiGetDestinationCity,
  apiGetPassengerType,
  apiGetSeatClass,
} from "../../api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import qs from "qs";

const orderSchema = yup.object().shape({
  departureCity: yup.number().required(),
  destinationsCity: yup.number().required(),
  departureDate: yup.string().required(),
  returnDate: yup.string().nullable(),
  classSeats: yup.number().required(),
  passenger: yup.array().of(
    yup.object().shape({
      passengerType: yup.number(),
      qtyPerson: yup.number(),
    })
  ),
});

export default function CardHome() {
  const [startLocs, setStartLocs] = useState([]);
  const [destLocs, setDestLocs] = useState([]);
  const [passengerTypes, setPassengerTypes] = useState([]);
  const [seatClasses, setSeatClasses] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(orderSchema) });

  const orderSubmit = (data) => {
    const paramStringified = qs.stringify(data);
    navigate(`/search?${paramStringified}`);
  };

  const fetchData = async () => {
    const responseLocs = await apiGetDestinationCity();
    const responsePassengerType = await apiGetPassengerType();
    const responseSeatClass = await apiGetSeatClass();

    setStartLocs(responseLocs.data.data);
    setDestLocs(responseLocs.data.data);
    setPassengerTypes(responsePassengerType.data.data);
    setSeatClasses(responseSeatClass.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(orderSubmit)}>
      <Card
        padding="0"
        width="100%"
        bg="white"
        // border="1px solid whitesmoke"
        alignSelf="center"
        borderRadius="var(--chakra-radii-xl)"
        shadow="xl"
      >
        <CardHeader
          bg="bluePrimary"
          color="white"
          borderTopLeftRadius="var(--chakra-radii-xl)"
          borderTopRightRadius="var(--chakra-radii-xl)"
          pb="3"
        >
          <Heading size="md">Where will you go?</Heading>
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
                color="bluePrimary"
                size="sm"
                fontWeight="var(--chakra-fontWeights-bold)"
              >
                Departure
              </Text>
              <Select
                border="2px solid #063970"
                borderRadius="var(--chakra-radii-lg)"
                width={["100%", "90%", "100%", "100%"]}
                size={["md", "md", "lg", "lg"]}
                icon={<FaPlaneDeparture />}
                variant="outline"
                color="bluePrimary"
                placeholder="Your departure"
                {...register("departureCity")}
              >
                {startLocs?.map((location) => {
                  return (
                    <option
                      key={location.destinationCityId}
                      value={location.destinationCityId}
                    >
                      {location.cityName}
                    </option>
                  );
                })}
              </Select>
            </GridItem>

            <GridItem
              w="100%"
              width={["100%", "90%", "100%", "100%", "100%"]}
              colSpan={["null", "2", "2", "2"]}
            >
              <Text
                color="bluePrimary"
                size="sm"
                fontWeight="var(--chakra-fontWeights-bold)"
              >
                Destination
              </Text>
              <Select
                border="2px solid #063970"
                borderRadius="var(--chakra-radii-lg)"
                width={["100%", "90%", "100%", "100%"]}
                size={["md", "md", "lg", "lg"]}
                icon={<FaPlaneArrival />}
                variant="outline"
                color="bluePrimary"
                placeholder="Destination"
                {...register("destinationsCity")}
              >
                {destLocs?.map((location) => {
                  return (
                    <option
                      key={location.destinationCityId}
                      value={location.destinationCityId}
                    >
                      {location.cityName}
                    </option>
                  );
                })}
              </Select>
            </GridItem>

            <GridItem w="100%" colSpan={["2", "null", "null", "null"]}>
              <Text
                color="bluePrimary"
                size="sm"
                fontWeight="var(--chakra-fontWeights-bold)"
              >
                Tanggal Pergi
              </Text>
              <Input
                placeholder="Pergi"
                width={["100%", "90%", "90%", "100%"]}
                variant="outline"
                color="bluePrimary"
                border="2px solid #063970"
                borderRadius="var(--chakra-radii-lg)"
                size={["md", "md", "lg", "lg"]}
                type="date"
                {...register("departureDate")}
              />
            </GridItem>

            <GridItem w="100%" colSpan={["2", "null", "null", "null"]}>
              <Text
                color="bluePrimary"
                size="sm"
                fontWeight="var(--chakra-fontWeights-bold)"
              >
                Tanggal Pulang
              </Text>
              <Input
                placeholder="Pergi"
                variant="outline"
                width={["100%", "90%", "90%", "100%"]}
                color="bluePrimary"
                border="2px solid #063970"
                borderRadius="var(--chakra-radii-lg)"
                size={["md", "md", "lg", "lg"]}
                type="date"
                {...register("returnDate")}
              />
            </GridItem>

            <GridItem w="100%" colSpan={2}>
              <Text
                color="bluePrimary"
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
                // fontSize={["null", "null", "null", "sm", "null"]}
                icon={<GiAchievement />}
                variant="outline"
                color="bluePrimary"
                placeholder="Your seat class"
                {...register("classSeats")}
              >
                {seatClasses?.map((seatClass) => {
                  return (
                    <option key={seatClass.classId} value={seatClass.classId}>
                      {seatClass.name}
                    </option>
                  );
                })}
              </Select>
            </GridItem>

            <GridItem w="100%" colSpan={2}>
              <Flex gap="4">
                {passengerTypes?.length === 0 ? (
                  <Center w="100%" h="5rem">
                    <Spinner />
                  </Center>
                ) : (
                  passengerTypes?.map((type, index) => {
                    return (
                      <FormControl key={type?.passengertypeId}>
                        <FormLabel color="bluePrimary" mb="0">
                          {type?.type}
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
                          <NumberInputField
                            {...setValue(
                              `passenger.${index}.passengerType`,
                              type?.passengertypeId
                            )}
                            {...register(`passenger.${index}.qtyPerson`)}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                    );
                  })
                )}
              </Flex>
            </GridItem>

            <GridItem w="100%" colSpan={2}>
              <br />
              {/* <Link to="/search"> */}
              <Button
                leftIcon={<FaSearchLocation />}
                width={["100%", "100%", "100%", "100%"]}
                size="lg"
                color="white"
                bg="bluePrimary"
                variant="solid"
                type="submit"
              >
                Cari Penerbangan
              </Button>
              {/* </Link> */}
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </form>
  );
}
