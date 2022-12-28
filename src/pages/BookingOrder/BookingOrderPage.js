import {
  Box,
  Button,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import qs from "qs";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  apiCreateOrder,
  apiGetAvailableSeats,
  apiGetCitizenship,
  apiGetPassengerType,
  apiGetPaymentType,
} from "../../api";
import { useNavigate } from "react-router-dom";

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

function PassengerDetailCard({
  index,
  register,
  availableSeats,
  citizenships,
  setValue,
}) {
  const [seatsToPick, setSeatsToPick] = useState([]);

  const _onChange = (event) => {
    switch (event.target.value) {
      case "Nyonya":
        setValue(`details.${index}.passengerType`, 2);
        break;
      case "Tuan":
        setValue(`details.${index}.passengerType`, 2);
        break;
      case "Anak-Anak":
        setValue(`details.${index}.passengerType`, 1);
        break;
      case "Bayi":
        setValue(`details.${index}.passengerType`, 3);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const temp = [];
    for (const seatGroup of availableSeats) {
      for (const seat of seatGroup.seatsList) {
        if (seat.statusSeats === "AVAILABLE") {
          temp.push(seat);
        }
      }
    }
    setSeatsToPick(temp);
  }, [availableSeats]);

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
            <Select
              placeholder="Title"
              {...register(`details.${index}.title`)}
              onChange={_onChange}
            >
              <option value="Tuan">Tuan</option>
              <option value="Nyonya">Nyonya</option>
              <option value="Anak-Anak">Anak-Anak</option>
              <option value="Bayi">Bayi</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              placeholder="Full Name"
              {...register(`details.${index}.fullName`)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Seats</FormLabel>
            <Select
              placeholder="Seats"
              {...register(`details.${index}.idSeats`)}
            >
              {seatsToPick?.map((seat) => {
                return (
                  <option key={seat.seatsId} value={seat.seatsId}>
                    {seat.seatsNumber}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Citizenship</FormLabel>
            <Select
              placeholder="Citizenship"
              {...register(`details.${index}.citizenship`)}
            >
              {citizenships.map((citizenship) => {
                return (
                  <option key={citizenship.id} value={citizenship.id}>
                    {citizenship.name} - {citizenship.code}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          {/* Jika international, ada additional fields */}
        </Flex>
      </CardBody>
    </Card>
  );
}

export default function BookingOrderPage() {
  const [totalPassenger, setTotalPassenger] = useState(0);
  const [availableSeats, setAvailableSeats] = useState([]);
  const [citizenships, setCitizenships] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const params = window.location.search.slice(1);
  const dataParams = qs.parse(params);
  console.log("dataParams", dataParams);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: dataParams,
    mode: "all",
    resolver: yupResolver(orderSchema),
  });

  const submitOrder = (data) => {
    console.log("order data", data);
    const createOrder = async (data) => {
      setIsLoading(true);
      const response = await apiCreateOrder(data);
      console.log(response);
      setIsLoading(false);

      if (response.data.responseCode === 200) {
        navigate("/");
        toast({
          title: `Order completed!`,
          status: "success",
          isClosable: true,
        });
      }
    };
    createOrder(data);
  };

  console.log(errors);
  // console.log(getValues());

  useEffect(() => {
    let tempPassenger = 0;
    for (const passenger of dataParams.passenger) {
      tempPassenger += Number(passenger.qtyPerson);
    }
    setTotalPassenger(tempPassenger);

    setValue("amount", dataParams.price * tempPassenger);
    setValue("scheduleId", dataParams.scheduleId);

    const fetchData = async () => {
      try {
        const responseAvailableSeats = await apiGetAvailableSeats(
          dataParams.scheduleId
        );
        setAvailableSeats(responseAvailableSeats.data.data);
      } catch (error) {}
      try {
        const responsePaymentTypes = await apiGetPaymentType();
        setPaymentTypes(responsePaymentTypes.data.data);
      } catch (error) {}
      try {
        const responseCitizenships = await apiGetCitizenship();
        setCitizenships(responseCitizenships.data.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(submitOrder)}>
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
          // setValue(`details.${index}.passengerType);
          return (
            <PassengerDetailCard
              key={index}
              index={index}
              register={register}
              availableSeats={availableSeats}
              citizenships={citizenships}
              setValue={setValue}
            />
          );
        })}
        <Card bg="white">
          <CardHeader>
            <Heading>Payment</Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <FormLabel>Payment Method</FormLabel>
              <Select
                {...register(`paymentId`)}
                placeholder="Select payment method"
              >
                {paymentTypes.map((payment) => {
                  return (
                    <option key={payment.paymentId} value={payment.paymentId}>
                      {payment.paymentMethod}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </CardBody>
        </Card>
        <Button type="submit" colorScheme={"blueHue"} isLoading={isLoading}>
          Order
        </Button>
      </Flex>
    </form>
  );
}
