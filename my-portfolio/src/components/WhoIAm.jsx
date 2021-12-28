import React from "react";
import jorgeImg from '../assets/Svgs/avatar.svg'
import { motion } from "framer-motion"
// import jorgeImg from "../dist/scss/IMG_7779.jpg";
const WhoIAm = () => {


  const item = {
    hidden: {
      opacity:[0,.2,.7],
      scale: [.6,1],
      transition: { duration: 3 },
    },
  };
  const item2 = {
    hidden: {
      opacity: [0, 0.2, 0.9],
      scale: [0.6, 1],
      transition: { duration: 3 },
      
    },
  };

  return (
    <div className="whoiam" id="whoiam">
      <motion.img
        src={jorgeImg}
        alt="Jorge Silva"
        className="jorge-img"
        variants={item}
        animate="hidden"
      />
      <motion.p
        className="aboutme-whoiam"
        variants={item2}
        animate="hidden"
        transition={{ delay: 2 }}
      >
        I’m a Navy Veteran with a wide range of experience, including
        maintaining steam engines, fire sprinklers and other complex systems. I
        have a deep interest in understanding systems holistically and
        implementing strategic solutions based on research. I’ve moved into the
        field of technology, web development and user experience design. I enjoy
        leveraging my skills of storytelling and photo editing to enhance my
        projects and connect with the community. As part of my UX certification,
        I co-designed a veteran mental health resource called Outpost that sums
        up my desire to make an impact on the world with whatever I create.
      </motion.p>
    </div>
  );
};

export default WhoIAm;
