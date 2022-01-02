
import acc from "../assets/Svgs/Creative_Cloud.svg";
import git from "../assets/Svgs/git-icon.svg";
import github from "../assets/Svgs/Github.svg";
import figma from "../assets/Svgs/Figma.svg";
import html from "../assets/Svgs/html5.svg";
import css from "../assets/Svgs/css-5.svg";
import sass from "../assets/Svgs/sass-1.svg";
import javascript from "../assets/Svgs/logo-javascript.svg";
import react from "../assets/Svgs/react-2.svg";
import node from "../assets/Svgs/nodejs-icon.svg";
import mongodb from "../assets/Svgs/mongodb.svg";
import jest from "../assets/Svgs/jest-seeklogo.com.svg";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Tech = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
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
      scale: [0.0, 1],
      opacity: [0, 0.5, 0.7],
      transition: { duration: 5 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { duration: 5 },
  };
  return (
    <div className="tech" id="tech">
      <motion.div
        variants={item}
        ref={ref}
        animate={controls}
        initial="visible"
        className="aboutme-tech"
      >
        {" "}
        Integrating what I learned about Full Stack Development & User
        experience design from BrainStation,I am able to fully create create
        Wireframes, Prototypes, fully reponsive sites.
      </motion.div>

      <motion.div
        className="logo-container"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        <img className="skill-logo" src={acc} alt="adobecreative-cloud-logo" />
        <img className="skill-logo" src={figma} alt="figma-logo" />{" "}
        <img className="skill-logo" src={git} alt="git-logo" />{" "}
        <img className="skill-logo" src={github} alt="github-logo" />{" "}
        <img className="skill-logo" src={html} alt="html-logo" />{" "}
        <img className="skill-logo" src={css} alt="css-logo" />{" "}
        <img className="skill-logo" src={sass} alt="sass-logo" />{" "}
        <img className="skill-logo" src={javascript} alt="javascript-logo" />{" "}
        <img className="skill-logo" src={react} alt="react-logo" />{" "}
        <img className="skill-logo" src={node} alt="node-logo" />{" "}
        <img className="skill-logo" src={mongodb} alt="mongodb-logo" />{" "}
        <img className="skill-logo" src={jest} alt="jest-logo" />
      </motion.div>
    </div>
  );
};

export default Tech;
