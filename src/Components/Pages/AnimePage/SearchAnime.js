import React from "react";
import { useState, useEffect } from "react";
import AnimeContent from "./AnimeContent";
import AnimePaginations from "./AnimePaginations";
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
        delay: 1,
      },
      opacity: {
        delay: 1,
      },
    },
    display: "none",
    height: 0,
    opacity: 0,
  },
};

function SearchAnime() {
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

    fetch(`${api}anime?${qs.stringify(query)}`)
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
      <AnimeContent value={text} onChange={(search) => setText(search)} />
      {text && !info.data && <span>loading...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <motion.li
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              exit="exit"
              key={anime.id}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 0.5 }}
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <motion.div variants={cardVariants} className="intro">
                <h3>{anime.attributes.canonicalTitle}</h3>
                <h4>{anime.attributes.synopsis}</h4>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      )}
      {info.meta && (
        <AnimePaginations
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </motion.div>
  );
}

export default SearchAnime;
