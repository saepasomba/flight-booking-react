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
  Text,
  useDisclosure,
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
import SeatsModal from "./SeatsModal";

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
  indexOverall,
  register,
  availableSeats,
  citizenships,
  setValue,
  type,
  flight,
}) {
  const [seatSelected, setSeatSelected] = useState("No seat");
  const [passengerType, setPassengerType] = useState(null);
  const {
    isOpen: isOpenSeatsModal,
    onOpen: onOpenSeatsModal,
    onClose: onCloseSeatsModal,
  } = useDisclosure();

  useEffect(() => {
    setValue(`details.${indexOverall}.passengerType`, type.passengerType);

    switch (type.passengerType) {
      case "1":
        setPassengerType("Anak-Anak");
        break;

      case "2":
        setPassengerType("Dewasa");
        break;

      case "3":
        setPassengerType("Bayi");
        break;

      default:
        break;
    }
  }, []);

  return (
    <>
      <Card bg="white">
        <CardHeader>
          <Heading>
            {indexOverall + 1} - {passengerType} #{index + 1}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Flex gap="1rem" flexDir="column">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Select
                placeholder="Title"
                {...register(`details.${indexOverall}.title`)}
              >
                <option value="Tuan">Tuan</option>
                <option value="Nyonya">Nyonya</option>
                <option value="Nona">Nona</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Full Name"
                {...register(`details.${indexOverall}.fullName`)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Seats</FormLabel>
              <Flex alignItems="center" gap="1rem">
                <Button
                  colorScheme="blueHue"
                  onClick={onOpenSeatsModal}
                  variant="ghost"
                >
                  Select seat
                </Button>
                <Text>{seatSelected} selected</Text>
              </Flex>
              {/* <Select
                placeholder="Seats"
                {...register(`details.${indexOverall}.idSeats`)}
              >
                {seatsToPick?.map((seat) => {
                  return (
                    <option key={seat.seatsId} value={seat.seatsId}>
                      {seat.seatsNumber}
                    </option>
                  );
                })}
              </Select> */}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Citizenship</FormLabel>
              <Select
                placeholder="Citizenship"
                {...register(`details.${indexOverall}.citizenship`)}
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
            {flight === "international" && (
              <>
                <FormControl isRequired>
                  <FormLabel>Passport Number</FormLabel>
                  <Input
                    placeholder="Passport Number"
                    {...register(`details.${indexOverall}.passportNumber`)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Issuing Country</FormLabel>
                  <Select
                    placeholder="Issuing Country"
                    {...register(`details.${indexOverall}.issuingCountry`)}
                  >
                    {citizenships.map((citizenship) => {
                      return (
                        <option key={citizenship.id} value={citizenship.name}>
                          {citizenship.name} - {citizenship.code}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Expiration Date</FormLabel>
                  <Input
                    placeholder="Expiration Date"
                    type="date"
                    {...register(`details.${indexOverall}.expirationDate`)}
                  />
                </FormControl>
              </>
            )}
          </Flex>
        </CardBody>
      </Card>
      <SeatsModal
        isOpen={isOpenSeatsModal}
        onClose={onCloseSeatsModal}
        seatsData={availableSeats}
        setValue={setValue}
        index={indexOverall}
        setSeatSelected={setSeatSelected}
      />
    </>
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
    const createOrder = async (data) => {
      setIsLoading(true);
      const response = await apiCreateOrder(data);
      setIsLoading(false);

      if (response.data.responseCode === 200) {
        navigate("/");
        window.location.reload();
        toast({
          title: `Order completed!`,
          status: "success",
          isClosable: true,
        });
      }
    };
    createOrder(data);
  };

  useEffect(() => {
    let tempPassenger = 0;
    for (const passenger of dataParams.passenger) {
      tempPassenger += Number(passenger.qtyPerson);
    }
    setTotalPassenger(tempPassenger);

    setValue("amount", dataParams.price * tempPassenger);
    setValue("scheduleId", dataParams.scheduleId);
    if (dataParams.returnDate) {
      setValue("returnDate", dataParams.returnDate);
    }

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
    <>
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
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Select placeholder="Booker Title" {...register("title")}>
                    <option value="Tuan">Tuan</option>
                    <option value="Nyonya">Nyonya</option>
                    <option value="Nona">Nona</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Name" {...register("bookingBy")} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" {...register("email")} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Phone Number" {...register("phoneNo")} />
                </FormControl>
              </Flex>
            </CardBody>
          </Card>
          {dataParams.passenger.map((type, index) => {
            let passengerBefore = 0;
            for (let i = 0; i < index; i++) {
              passengerBefore += Number(dataParams.passenger[i].qtyPerson);
            }
            return (
              <>
                {[...Array(Number(type.qtyPerson)).keys()].map((index) => {
                  return (
                    <PassengerDetailCard
                      key={index}
                      index={index}
                      indexOverall={passengerBefore + index}
                      type={type}
                      register={register}
                      availableSeats={availableSeats}
                      citizenships={citizenships}
                      setValue={setValue}
                      flight={dataParams.flight}
                    />
                  );
                })}
              </>
            );
          })}
          <Card bg="white">
            <CardHeader>
              <Heading>Payment</Heading>
            </CardHeader>
            <CardBody>
              <FormControl isRequired>
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
    </>
  );
}
