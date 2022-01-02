import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jorgeImg from "../assets/Svgs/avatar.svg";


const WhoIAm = () => {

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
      opacity: [0, 0.5, .7],
        transition: { duration: 5 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { duration: 5 },
  };

  return (
    <div className="whoiam" id="whoiam">
      <motion.img
        src={jorgeImg}
        alt="Jorge Silva"
        className="jorge-img"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      />
      <motion.p
        className="aboutme-whoiam"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        I’m a Navy Veteran with a wide range of experience, including
        maintaining steam engines, fire sprinklers and other complex systems. I
        have a deep interest in understanding systems holistically and
        implementing strategic solutions based on research. I’ve moved into the
        field of technology, web development and user experience design. I enjoy
        leveraging my skills of storytelling and photo editing to enhance my
        projects and connect with the community.
      </motion.p>
    </div>
  );
};

export default WhoIAm;
