import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar.jsx";
import { Footers } from "../../components/footer/Footer.jsx";
import CardHome from "../../components/card/cardHome.js";
export default function Homepage() {
  return (
    <>
      <Navbar />

      <Flex flexDirection="column" padding="5">
        <h1>INI BAGIAN HEADER</h1>
        <CardHome />
        <h1>INI BAGIAN ABOUT US</h1>
      </Flex>

      <Footers />
    </>
  );
}
