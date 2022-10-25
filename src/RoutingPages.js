import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import { AnimatePresence } from "framer-motion";

const RoutingPages = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutingPages;
