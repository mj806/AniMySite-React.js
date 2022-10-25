import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Anime from "./Components/Pages/AnimePage/Anime";
import Manga from "./Components/Pages/MangaPage/Manga";
import Error from "./Error";
import { AnimatePresence } from "framer-motion";

const RoutingPages = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Anime" element={<Anime />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutingPages;
