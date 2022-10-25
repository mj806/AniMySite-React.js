import React from "react";
import { motion } from "framer-motion";
import "../MangaPage/Manga.css";

function MangaBanner() {
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
      <div className="MBbox">
        <h1>MANGA</h1>
      </div>
    </motion.div>
  );
}

export default MangaBanner;
