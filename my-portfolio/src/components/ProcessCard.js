import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProcessCard = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
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
    <motion.div
      className="process-step1-des-container"
      variants={item}
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <h3 className="process-heading">{props.processTitle}</h3>
      <p className="procss-des">{props.processDes}</p>
    </motion.div>
  );
};

export default ProcessCard;
