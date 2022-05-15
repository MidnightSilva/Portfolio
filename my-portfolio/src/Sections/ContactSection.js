import MyForm from "../components/Myform.js";

import PaperPlane  from "../components/paperPlane"
import React, { useState,useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactSection = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.9,
  });
const [message, setMessage ] = useState(false);

  const toggleMessage = () => {
       message ? setMessage(false) : setMessage(true)  
   
  };
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
      <div className="formpage" id="form" onClick={toggleMessage}>
        <h2 className="heading5">Contact me</h2>
        <p className="subheading5">
          Click on the Paper Plane to send me a message, Looking foward to
          hearing from you all!
        </p>

        {message ? <MyForm /> : <PaperPlane />}
      </div>
    </motion.div>
  );
};

export default ContactSection;
