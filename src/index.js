import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import reportWebVitals from "./reportWebVitals";

import Homepage from "./pages/Homepage/Homepage";

import "@fontsource/open-sans";
import "@fontsource/unbounded";
import "@fontsource/raleway";

import "./index.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HistoryBookPage from "./pages/HistoryBook/HistoryBookPage.js";
import SearchPages from "./pages/Searchpage/SearchPage.js";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import theme from "./theme/Theme";
import NotFound from "./pages/NotFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Box pt="5rem">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/history" element={<HistoryBookPage />} />
            <Route path="/search" element={<SearchPages />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
