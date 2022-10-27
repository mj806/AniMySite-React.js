import React from "react";
import { motion } from "framer-motion";
import "../HomeScreen/HomeScreen.css";

function Backdrop() {
  return (
    <motion.div
      initial={{ opacity: 1, zIndex: 5 }}
      animate={{
        opacity: 0,
        overflow: "hidden",
        zIndex: 0,
        transition: { duration: 1.5, delay: 6 },
      }}
      className="backdrop"
    >
      <motion.h1
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 8,
          overflow: "hidden",
          transition: {
            duration: 2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 2,
          },
        }}
      >
        Ani
        <motion.strong
          initial={{ color: "red" }}
          animate={{
            color: "royalblue",
            transition: { color: { duration: 0.5 }, delay: 1 },
          }}
        >
          My
        </motion.strong>
        Site
      </motion.h1>
    </motion.div>
  );
}

export default Backdrop;
