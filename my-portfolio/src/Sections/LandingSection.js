import { motion } from "framer-motion";

const LandingSection = () => {
   const item = {
     hidden: {
       opacity: [0, 0.5, 1],
       transition: { duration: 3 },
     },
   };
  return (
    <div className="landing-tile">
      <motion.h2 className="landing-greeting" variants={item} animate="hidden">
        Welcome to my portfoilo <motion.span className="hand">👋🏼</motion.span>
      </motion.h2>

      <motion.p className="word" variants={item} animate="hidden">
        My name is Jorge. I am a
        <motion.span className="highlight"> USN Veteran,</motion.span>
        <motion.span className="highlight">Full Stack dev,</motion.span> with
        some <motion.span className="highlight">UXUI</motion.span> Experience.
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
