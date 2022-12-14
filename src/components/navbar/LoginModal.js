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
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiLogIn } from "../../api";
import GoogleAuthButton from "./GoogleAuthButton";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

export default function LoginModal(props) {
  const { isOpen, onClose, authTrigger } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const loginSubmit = (data) => {
    const logginIn = async (data) => {
      setIsLoading(true);
      try {
        const response = await apiLogIn(data);
        localStorage.setItem("USER_TOKEN", response.data.data.token);
        // authTrigger(response.data.data.token);
        localStorage.setItem("AUTH_METHOD", "NORMAL");
        localStorage.setItem("USER_ROLE", response.data.data.role);
        window.location.reload();
        onClose();
      } catch (error) {
        setError("Please make sure your email and password are correct!");
      }
      setIsLoading(false);
    };
    logginIn(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <ModalHeader>Login to your account!</ModalHeader>

          <ModalBody>
            <Flex flexDir="column" gap="1rem">
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
                  type="password"
                  placeholder="Password..."
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              {error && <Text color="red">{error}</Text>}
            </Flex>
          </ModalBody>

          <ModalFooter flexDir="column" gap="1rem">
            <Flex gap="1rem">
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                Login
              </Button>
            </Flex>
            <GoogleAuthButton
              onClose={onClose}
              authTrigger={authTrigger}
              setError={setError}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
