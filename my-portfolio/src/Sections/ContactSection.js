import MyForm from "../components/Myform.js";
import React, { useState } from "react";
import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
const ContactSection = () => {

  const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 0.9,
  // });
const [message, setMessage ] = useState(false);

  const toggleMessage = () => {
       message ? setMessage(false) : setMessage(true)  
   
  };
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);

  const item = {
    visible: {
      opacity: [0.5, 1],
      scale: 1,
      transition: { duration: 2 },
    },
    hidden: { opacity: 1},
 
  };


  return (
    <motion.div
      variants={item}
      // ref={ref}
      animate={controls}
      initial="hidden"
      className="form-img"
    >
      <div className="formpage" id="form" onClick={toggleMessage}>
        <h2 className="heading5">Contact me</h2>
        <p className="subheading5">
          Looking to work together? have a project in mind, go ahead and shoot me a message! 
          Looking forward to hearing from you all!
        </p>

      <MyForm /> 
      </div>
    </motion.div>
  );
};

export default ContactSection;
