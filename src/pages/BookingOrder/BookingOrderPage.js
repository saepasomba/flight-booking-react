import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import qs from "qs";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const orderSchema = yup.object().shape({
  title: yup.string().required(),
  bookingBy: yup.string().required(),
  email: yup.string().email().required(),
  phoneNo: yup.string().required(),
  scheduleId: yup.number().required(),
  returnDate: yup.string().nullable(),
  amount: yup.number().required(),
  paymentId: yup.number().required(),
  details: yup.array().of(
    yup.object().shape({
      idSeats: yup.number().required(),
      passengerType: yup.string().required(),
      citizenship: yup.string().required(),
      title: yup.string().required(),
      fullName: yup.string().required(),
      passportNumber: yup.string().nullable(),
      issuingCountry: yup.string().nullable(),
      expirationDate: yup.string().nullable(),
    })
  ),
});

function PassengerDetailCard({ key, index, register }) {
  return (
    <Card bg="white">
      <CardHeader>
        <Heading>Passenger Details #{index + 1}</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Flex gap="1rem" flexDir="column">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Select placeholder="Title">
              <option value="Tuan">Tuan</option>
              <option value="Nyonya">Nyonya</option>
              <option value="Anak-Anak">Anak-Anak</option>
              <option value="Bayi">Bayi</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Full Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Seats</FormLabel>
            <Input placeholder="Seats" />
          </FormControl>
          <FormControl>
            <FormLabel>Citizenship</FormLabel>
            <Input placeholder="Citizenship" />
          </FormControl>
          {/* Jika international, ada additional fields */}
        </Flex>
      </CardBody>
    </Card>
  );
}

export default function BookingOrderPage() {
  const [totalPassenger, setTotalPassenger] = useState(0);

  const params = window.location.search.slice(1);
  const data = qs.parse(params);
  console.log(data);

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
    let tempPassenger = 0;
    for (const passenger of data.passenger) {
      tempPassenger += Number(passenger.qtyPerson);
    }
    console.log("temp", tempPassenger);
    setTotalPassenger(tempPassenger);
  }, []);

  return (
    <Flex
      flexDir="column"
      width={{ base: "90%", lg: "80%" }}
      m="2rem auto"
      gap="2rem"
    >
      <Card bg="white">
        <CardHeader>
          <Heading>Booker Information</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Flex gap="1rem" flexDir="column">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Select placeholder="Booker Title" {...register("title")}>
                <option value="Tuan">Tuan</option>
                <option value="Nyonya">Nyonya</option>
                <option value="Anak-Anak">Anak-Anak</option>
                <option value="Bayi">Bayi</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" {...register("bookingBy")} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" {...register("email")} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="Phone Number" {...register("phoneNo")} />
            </FormControl>
          </Flex>
        </CardBody>
      </Card>
      {[...Array(totalPassenger).keys()].map((index) => {
        return (
          <PassengerDetailCard key={index} index={index} register={register} />
        );
      })}
      <Card>
        <CardHeader>
          <Heading>Payment Method</Heading>
        </CardHeader>
      </Card>
    </Flex>
  );
}
