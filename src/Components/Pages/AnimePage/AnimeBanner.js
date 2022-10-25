import React from "react";
import { motion } from "framer-motion";
import "../AnimePage/AnimeStyle.css";

function AnimeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: {
          delay: 2,
          duration: 1.5,
        },
      }}
    >
      <div className="ABbox">
        <h1>ANIME</h1>
      </div>
    </motion.div>
  );
}

export default AnimeBanner;
