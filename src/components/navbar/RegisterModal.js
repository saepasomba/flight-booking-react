import {
  Button,
  ButtonGroup,
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
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
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
  const { isOpen, onClose, authTrigger } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://tix-service-bej5.up.railway.app/ticketing-service/ext/register",
          userData
        );
        console.log(response);
        const data = response.data;
        localStorage.setItem("USER_TOKEN", data.data);
        authTrigger(data.data);
        onClose();
      } catch (error) {
        setError("Invalid! Please make sure your email is not used.");
      }
      setIsLoading(false);
      console.log("FINISHED HITTING API");
    };

    apiRegister(cleanData);
    console.log("FINISHED SUBMITTING PROTOCOL");
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
                  {errors.fullName && errors.fullName.message}
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
              {error && <Text color="red">{error}</Text>}
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