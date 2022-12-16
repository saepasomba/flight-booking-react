import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const profileSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  birthDate: yup.string().nullable(),
  phoneNo: yup.string().nullable(),
  address: yup.string().nullable(),
});

export default function ProfileForm(props) {
  const { isOpen, onClose, profile, refetchProfile } = props;
  const [isLoading, setIsLoading] = useState(false);

  const { userId, ...defaultValueProfile } = {
    ...profile,
  };

  console.log(defaultValueProfile);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValueProfile,
    mode: "onChange",
    resolver: yupResolver(profileSchema),
  });

  const editProfileSubmit = (data) => {
    console.log("UPDATING...");
    setIsLoading(true);

    const updateProfile = async (data) => {
      console.log("Data sent", data);
      const response = await axios.put(
        "https://tix-service-bej5.up.railway.app/ticketing-service/users/update-profile",
        data,
        {
          headers: {
            Authorization: localStorage.getItem("USER_TOKEN"),
          },
        }
      );
      setIsLoading(false);
      onClose();
      refetchProfile();
    };

    const { email, ...dataToSend } = data;
    updateProfile(dataToSend);
  };

  useEffect(() => {
    reset(defaultValueProfile);
  }, [profile]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(editProfileSubmit)}>
          <ModalHeader>Edit your profile details!</ModalHeader>

          <ModalBody>
            <Flex flexDir="column" gap="1rem">
              <FormControl isInvalid={errors.fullName}>
                <FormLabel>Full name</FormLabel>
                <Input
                  type="text"
                  {...register("fullName")}
                  placeholder={"Full name..."}
                />
                <FormErrorMessage>
                  {errors.fullName && errors.fullName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register("email")} disabled={true} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.birthDate}>
                <FormLabel>Birth Date</FormLabel>
                <Input
                  type="date"
                  // value={profileField?.birthDate || ""}
                  {...register("birthDate")}
                  placeholder={"Birth date..."}
                />
                <FormErrorMessage>
                  {errors.birthDate && errors.birthDate.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phoneNo}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="text"
                  // value={profileField?.phoneNo || ""}
                  {...register("phoneNo")}
                  placeholder={"Phone number..."}
                />
                <FormErrorMessage>
                  {errors.phoneNo && errors.phoneNo.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.address}>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  {...register("address")}
                  placeholder={"Address..."}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex gap="1rem">
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="blue" type="submit" isLoading={isLoading}>
                Register
              </Button>
            </Flex>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
