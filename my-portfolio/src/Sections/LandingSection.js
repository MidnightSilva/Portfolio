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
      </motion.div>
    </div>
  );
};

export default LandingSection;
