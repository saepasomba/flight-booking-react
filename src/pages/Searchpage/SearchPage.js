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
  const [flights, setFlights] = useState([]);

  const {
    isOpen: loginIsOpen,
    onOpen: loginOnOpen,
    onClose: loginOnClose,
  } = useDisclosure();

  const {
    isOpen: registerIsOpen,
    onOpen: registerOnOpen,
    onClose: registerOnClose,
  } = useDisclosure();

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
      const response = await apiGetFlights(data);
      console.log(response);
      setFlights(response.data.data.schedule);
    };

    console.log(data);
    fetchData(data);
  }, []);

  return (
    <>
      <Flex flexDirection="column">
        <Box alignSelf="center">
          <Text
            fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]}
            color="grey"
            fontFamily="sans-serif"
            fontWeight="semibold"
          >
            SEARCH RESULT
          </Text>
        </Box>

        <Flex
          flexDirection="column"
          ms="2rem"
          me="2rem"
          height="100%"
          widht="100%"
          pb="2rem"
        >
          {flights.length > 0 ? (
            flights.map((flight) => {
              return <CardSearchs flight={flight} searchParams={data} />;
            })
          ) : (
            <Center>
              <Spinner />
            </Center>
          )}
        </Flex>
      </Flex>
    </>
  );
}
