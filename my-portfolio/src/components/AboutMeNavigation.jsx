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
      scale: 1,
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




   const [who, setWho] = useState(true);
 const [tech , setTech ] = useState(true);
   const [process, setProcess] = useState(false);

const handleWhoUnderline = () => {




  
  who ? setWho(true) : setWho(true);
tech ? setTech(true) : setTech(true);
  process ? setProcess(false) : setProcess(false);
};

const handleTechUnderline = () => {
  who ? setWho(false) : setWho(false);
tech ? setTech(false) : setTech(false);
  process ? setProcess(false) : setProcess(false);
};

const handleProcessUnderline = () => {
who ? setWho(false) : setWho(false);
tech ? setTech(true) : setTech(true);
  process ? setProcess(true) : setProcess(true);
};




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

      <ul className="aboutme-points">
        <Link to="/">
          {" "}
          <motion.il
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={item}
            whileHover={{ scale: 1.5, color: "#356394" }}
            className={`aboutme-nav-1${who ? "Show" : ""}`}
            onClick={() => handleWhoUnderline(!handleWhoUnderline)}
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
            whileHover={{ scale: 1.5, color: "#356394" }}
            className={`aboutme-nav-2${tech ? "Show" : ""}`}
            onClick={() => handleTechUnderline(!handleTechUnderline)}
          >
            Tech
          </motion.il>
        </Link>

        <Link to="/process">
          <motion.il
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={item3}
            whileHover={{ scale: 1.5, color: "#356394" }}
            className={`aboutme-nav-3${process ? "Show" : ""}`}
            onClick={() => handleProcessUnderline(!handleProcessUnderline)}
          >
            Process
          </motion.il>
        </Link>
      </ul>
    </motion.div>
  );
};

export default AboutMeNavigation;
