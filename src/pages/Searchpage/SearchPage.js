import React, { useEffect, useState } from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  Image,
  Center,
  Spinner,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import CardSearchs from "../../components/card/cardSearch";
import bgpesawat from "../../asset/bgpesawat.jpg";
import Navbar from "../../components/navbar/Navbar.js";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { apiGetFlights } from "../../api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoginModal from "../../components/navbar/LoginModal";
import RegisterModal from "../../components/navbar/RegisterModal";

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

export default function SearchPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState([]);

  const params = window.location.search.slice(1);
  const data = qs.parse(params);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    mode: "all",
    resolver: yupResolver(orderSchema),
  });

  useEffect(() => {
    const fetchData = async (data) => {
      try {
        setIsLoading(true);
        const response = await apiGetFlights(data);
        if (response.data.responseCode === 200) {
          setFlights(response.data.data.schedule);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(data);
  }, []);

  return (
    <>
      <Flex flexDirection="column">
        <Box alignSelf="center">
          <Heading
            fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]}
            // color="grey"
            fontWeight="semibold"
          >
            SEARCH RESULT
          </Heading>
        </Box>

        <Flex
          flexDirection="column"
          ms="2rem"
          me="2rem"
          height="100%"
          widht="100%"
          pb="2rem"
        >
          {isLoading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <>
              {flights?.length === 0 ? (
                <Center h="5rem">
                  <Heading color="gray">No Flight Schedule Found 😔</Heading>
                </Center>
              ) : (
                flights.map((flight) => {
                  return (
                    <CardSearchs
                      key={flight.scheduleId}
                      flight={flight}
                      searchParams={data}
                    />
                  );
                })
              )}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}
