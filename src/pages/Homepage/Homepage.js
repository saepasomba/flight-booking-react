import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Navbar from "../../components/navbar/Navbar.jsx";

export default function Homepage() {
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

  return (
    <>
      <Navbar />
      <h1>ini homepage</h1>
      <Button onClick={loginOnOpen}>Login</Button>

      <Button onClick={registerOnOpen}>Register</Button>

      <LoginModal isOpen={loginIsOpen} onClose={loginOnClose} />
      <RegisterModal isOpen={registerIsOpen} onClose={registerOnClose} />
    </>
  );
}
