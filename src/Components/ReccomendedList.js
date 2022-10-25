import React from "react";
import { motion } from "framer-motion";

const RecCard = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    y: [-100, 0],
  },
};

function ReccomendedList() {
  return (
    <div>
      <motion.ul
        className="Rec-Content"
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.4 }}
      >
        <motion.li key="rec">
          <motion.img
            variants={RecCard}
            src="https://th.bing.com/th/id/OIP.6wl0D05aBaWjgqgNn9RwLAHaKE?pid=ImgDet&rs=1"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://image.tmdb.org/t/p/original/nKuktkZFin5rtSTqP6OoP3lApmr.jpg"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://ih1.redbubble.net/image.1929051481.6902/flat,750x1000,075,t.jpg"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/EyIBaakU8AMs4Zh-720x1018.jpg?width=640&fit=bounds&height=480&quality=20&dpr=0.05"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://th.bing.com/th/id/OIP.yx32yXdGsh4a2rKh4uJfmgHaKY?pid=ImgDet&rs=1"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://image.tmdb.org/t/p/original/7zcIgfFGtHGyvS9tQhCFmjoMu14.jpg"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://www.bloggang.com/data/i/iamzeon/picture/1635697769.jpg"
            alt=""
          />
        </motion.li>
        <motion.li variants={RecCard} key="rec">
          <img
            src="https://th.bing.com/th/id/OIP.3tLhE0Gx_fm1cX7EsluA4gHaLH?pid=ImgDet&rs=1"
            alt=""
          />
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default ReccomendedList;
