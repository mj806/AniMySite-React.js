import React from "react";
import { motion } from "framer-motion";
import "./AnimeStyle.css";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const AnimePaginations = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 1,
          duration: 1,
        },
      }}
      className="paginations"
    >
      <li>
        <button
          className="prev"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Previous
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={page === current ? "paginations__item--active" : null}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          className="next"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Next
        </button>
      </li>
    </motion.ul>
  );
};

export default AnimePaginations;
