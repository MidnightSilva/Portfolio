import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutMeNavigation = () => {


  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const item = {
    visible: {
      opacity: [0.5, 1],

      transition: { duration: 2 },
    },
    hidden: { opacity: 0.2 },
  };

  const item3 = {
    visible: {
      opacity: [0.5, 1],
      transition: { duration: 2 },
    },
    hidden: { opacity: 0.2 },
  };




   const [who] = useState(true);
 const [tech ] = useState(true);







  return (
    <motion.div
      variants={item3}
      ref={ref}
      animate={controls}
      initial="hidden"
      className="aboutme-navigation"
    >
      <motion.h1
        className="Heading2"
        variants={item3}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        About Me
      </motion.h1>

      <motion.ul
        whileHover={{  color: "#cb330c" }}
        className="aboutme-points"
      >
        <Link to="/">
          {" "}
          <motion.il
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={item}
            whileHover={{ scale: 1.5, color: "#cb330c" }}
            className={`aboutme-nav-1${who ? "Show" : ""}`}
          >
            Who i am
          </motion.il>
        </Link>
        <Link to="/tech">
          {" "}
          <motion.il
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={item3}
            whileHover={{ scale: 1.5, color: "#cb330c" }}
            className={`aboutme-nav-2${tech ? "Show" : ""}`}
          >
            Tech
          </motion.il>
        </Link>

      </motion.ul>
    </motion.div>
  );
};

export default AboutMeNavigation;
