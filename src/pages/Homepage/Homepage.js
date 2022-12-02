import { Button } from "@chakra-ui/react";
import "./home.css";
import { Navbar } from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { HistoryCard } from "../../components/historyCard/HistoryCard";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <HistoryCard />
      {/* <Navbar/> */}
      {/* <Header/> */}
    </div>
  );
};
export default Homepage;
