import { motion } from "framer-motion";

const LandingSection = () => {

   const item = {
     hidden: {
      scale:[4,-2,1],
       opacity: [0, 0, 0, 0.5, 1],
       transition: { duration: 5 },
     },
   };
 const item2 = {
   hidden: {
  y:[0,-100],
     opacity: [0, 0,0,0.5, 1],
     transition: { duration: 7 },
   },
 };

  const item3 = {
    hidden: {
      rotateX: 360,
      opacity: [0, 0, 0, 0.5, 1],
      transition: { duration: 9 },
    },
  };


  return (
    <div className="landing-tile">
      <motion.h2 className="landing-greeting" variants={item} animate="hidden">
        Welcome to my portfoilo <motion.span className="hand">👋🏼</motion.span>
      </motion.h2>

      <motion.p className="word" variants={item2} animate="hidden">
        My name is Jorge. I am a
        <motion.span className="highlight" variants={item3}>
          {" "}
          USN Veteran,
        </motion.span>
        <motion.span className="highlight" variants={item3}>
          Full Stack dev,
        </motion.span>{" "}
        with some{" "}
        <motion.span className="highlight" variants={item3}>
          UXUI
        </motion.span>{" "}
        Experience.
      </motion.p>
      {/* <div class="morphing">
          <div class="word">a USN Veteran</div>
          <div class="word">UX/UI Designer &</div>
          <div class="word">Fronted Developer</div>
        </div> */}
      {/* <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </div>
  );
};

export default LandingSection;
