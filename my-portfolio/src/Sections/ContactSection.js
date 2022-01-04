import MyForm from "../components/Myform.js";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactSection = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.9,
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
    hidden: { opacity: 0.2},
 
  };


  return (
    <motion.div
      variants={item}
      ref={ref}
      animate={controls}
      initial="hidden"
      className="form-img"
    >
      <div className="formpage" id="form">
        <h2 className="heading5">Contact me</h2>
        <p className="subheading5">
          Leave a message and I'll get back to you as soon as I can. Looking
          forward to hearing from you.
        </p>
        <MyForm />
      </div>
    </motion.div>
  );
};

export default ContactSection;
