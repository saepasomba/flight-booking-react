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
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const registerSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Your passwords do not match.")
    .required(),
});

export default function RegisterModal(props) {
  const { isOpen, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const registerSubmit = (data) => {
    console.log("Registering...");
    console.log(data);

    const { confirmPassword, ...cleanData } = data;
    console.log(cleanData);
    const apiRegister = async (userData) => {
      const response = await axios.post(
        "https://tix-service-bej5.up.railway.app/ticketing-service/ext/register",
        userData
      );
      console.log(response);
    };

    apiRegister(cleanData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <ModalHeader>Create your new account!</ModalHeader>

          <ModalBody>
            <Flex flexDir="column" gap="1rem">
              <FormControl isRequired isInvalid={errors.fullName}>
                <FormLabel>Full Name</FormLabel>
                <Input {...register("fullName")} placeholder="Full name..." />
                <FormErrorMessage>
                  {errors.fullName && errors.email.fullName}
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input {...register("email")} placeholder="Email..." />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  {...register("password")}
                  placeholder="Password..."
                  type="password"
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={errors.confirmPassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  {...register("confirmPassword")}
                  placeholder="Type your password again..."
                  type="password"
                />
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex gap="1rem">
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="blue" type="submit">
                Register
              </Button>
            </Flex>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
