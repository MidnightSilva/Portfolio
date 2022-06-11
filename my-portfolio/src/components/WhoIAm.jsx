import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jorgeImg from "../assets/Images/FullSizeRender.jpg";


const WhoIAm = () => {

   const controls = useAnimation();
   const [ref, inView] = useInView({
     threshold: .7,
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
      scale: [0.9, 1],
      // opacity: [0.2, 0.7],
      transition: { duration: 3 },
    },
    // hidden: { opacity: 0.2, scale: 0.9 },
    transition: { duration: 1 },
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
        I’m <span className="highlight">Silva</span>. I have a 
        <span className="highlight">non-traditional</span>  background of being
        a <span className="highlight">USN Veteran</span> with a wide range of
        experience from maintaining 
        <span className="highlight">Steam engines</span> to
        <span className="highlight">developing Software</span>.
        <br />
        <br />
        When Covid hit I made my transition into the Techonlongy field by
        enrolling <span className="highlight">Brainstation.</span>While enrolled
        at Brainstation I gained:
        <br /> <br /> Currently, I am a
        <span className="highlight">Tech Trainer</span> for{" "}
        <span className="highlight">Everise</span>, While I come to my{" "}
        <span className="highlight">first year </span> at everise I have taken a
        very active role{" "}
        <span className="highlight"> improving the experience</span>
        for both agents and customer Training new agents, creating job aids, and
        working on a call guide. 
      </motion.p>
    </div>
  );
};

export default WhoIAm;
