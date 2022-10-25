import React, { useState } from "react";
import { motion } from "framer-motion";
import useDebounce from "../../useDebounce";
import "../../../Assets/main1.css";

const AnimeContent = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);
  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 1.7, duration: 1.7 },
      }}
    >
      <div className="main-head">
        <form className="search-box">
          <input
            type="search"
            placeholder="Search for an Anime..."
            required
            value={displayValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </motion.main>
  );
};

export default AnimeContent;
