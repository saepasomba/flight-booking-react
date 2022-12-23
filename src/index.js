import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import reportWebVitals from "./reportWebVitals";

import Homepage from "./pages/Homepage/Homepage";

import "./index.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HistoryBookPage from "./pages/HistoryBook/HistoryBookPage.js";
import SearchPages from "./pages/Searchpage/SearchPage.js";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import Adminpage from './pages/Adminpage/Adminpage.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<HistoryBookPage />} />
          <Route path="/search" element={<SearchPages />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin-page" element={<Adminpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
