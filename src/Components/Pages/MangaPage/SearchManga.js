import React from "react";
import { useState, useEffect } from "react";
import MangaContent from "./MangaContent";
import MangaPaginations from "./MangaPaginations";
import qs from "qs";
import { motion } from "framer-motion";

const api = "https://kitsu.io/api/edge/";

const LIMIT = 12;

const cardVariants = {
  initial: {
    y: 1,
    display: "none",
    height: 0,
    opacity: 0,
  },
  hover: {
    y: -337,
    display: "block",
    transition: {
      opacity: {
        delay: 0.1,
      },
    },
    height: 333,
    opacity: 1,
  },
  exit: {
    y: 0,
    transition: {
      height: {
        duration: 1,
      },
    },
    display: "none",
    height: 0,
    opacity: 0,
  },
};

function SearchManga() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");
  const [offset, setOffset] = useState(0);

  console.log(info);

  useEffect(() => {
    //setInfo({});
    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    };
    if (text) {
      query.filter = {
        text,
      };
    }

    fetch(`${api}manga?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, [text, offset]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          opacity: { delay: 1.5, duration: 1.5 },
          delay: 1.3,
          duration: 1.3,
        },
      }}
    >
      <MangaContent value={text} onChange={(search) => setText(search)} />
      {text && !info.data && <span>loading...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((manga) => (
            <motion.li
              initial="initial"
              whileHover="hover"
              exit="exit"
              key={manga.id}
            >
              <img
                src={manga.attributes.posterImage.small}
                alt={manga.attributes.canonicalTitle}
              />
              <motion.div variants={cardVariants} className="intro">
                <h3>{manga.attributes.canonicalTitle}</h3>
                <h4>{manga.attributes.synopsis}</h4>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      )}
      {info.meta && (
        <MangaPaginations
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </motion.div>
  );
}

export default SearchManga;
