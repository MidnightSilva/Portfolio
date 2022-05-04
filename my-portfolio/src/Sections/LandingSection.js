import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingSection = (  ) => {
  const controls = useAnimation();
  const [ref, inView, ] = useInView({
    threshold: 0.9,
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
      scale: [0.8, 1],
      opacity: [0.2, 1],
      transition: { duration: 3 },
    },
    hidden: { opacity: 0.2, scale: 0.9 },
    transition: { duration: 1 },
  };


    // const item3 = {
    //   visible: {
    //        rotateX:1440,
    //     scale: [0.9, 1],
    //     opacity: [0.2, 0.7],
    //     transition: { duration: 5 },
    //   },
    //   hidden: { opacity: 0.2, scale: 0.9 },
    //   transition: { duration: 1 },
    // };

  return (
    <div className="banner">
      <motion.div
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
        className="landing-tile"
        id="banner"
      >
        <h2 className="landing-greeting">
          Welcome <motion.span className="hand">👋🏼</motion.span>
          <br />
          <span className="greeting-2">to my portfoilo, </span>
          <span className="greeting-3">I'm Silva an :</span>{" "}
        </h2>
        <ul className="word-container">
          <il className="word">Frontend dev</il>
          <il className="word">Tech Trainer</il>
          <il className="word">Navy Veteran</il>
        </ul>

        {/* <motion.p className="word">
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
        </motion.p> */}
      </motion.div>
    </div>
  );
};

export default LandingSection;
