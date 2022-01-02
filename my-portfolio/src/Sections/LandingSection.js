import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingSection = (  ) => {
  const controls = useAnimation();
  const [ref, inView, ] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else  {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const item = {
    visible: {
      scale: [ .0, 1],
      opacity: [0, 0, 0, 0.5, 1],
      transition: { duration: 3 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { duration: 1 },
  };

  const item2 = {
    visible: {
      scale: [0.0, 1],
      opacity: [0, 0, 0, 0.5, 1],
      transition: { duration: 3 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { duration: 1 },
  };

  const item3 = {
  visible: {
      rotateX:1440,
      opacity: [0, 0, 0, 0.5, 1],
      scale:1,
      transition: { duration: 5 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { duration: 1 },
  };

  return (
    <div className="landing-tile">
      <motion.h2
        className="landing-greeting"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        Welcome to my portfoilo <motion.span className="hand">👋🏼</motion.span>
      </motion.h2>

      <motion.p
        className="word"
        variants={item2}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        My name is Jorge. I am a
        <motion.span
          className="highlight"
          variants={item3}
          ref={ref}
          animate={controls}
          initial="hidden"
        >
          {" "}
          USN Veteran,
        </motion.span>
        <motion.span
          className="highlight"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={item3}
        >
          Full Stack dev,
        </motion.span>{" "}
        with some{" "}
        <motion.span
          className="highlight"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={item3}
        >
          UXUI
        </motion.span>{" "}
        Experience.
      </motion.p>
    </div>
  );
};

export default LandingSection;
