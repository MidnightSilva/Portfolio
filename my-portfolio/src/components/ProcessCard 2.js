import React from 'react'
import { motion } from "framer-motion";

const ProcessCard = (props) => {
    
      const item2 = {
        hidden: {
          opacity: [0, 0.2, 0.9],
          scale: [0.6, 1],
          transition: { duration: 3 },
        },
      };
    return (
      <motion.div
        className="process-step1-des-container"
        variants={item2}
        animate="hidden"
      >
        <h3 className="process-heading">{props.processTitle}</h3>
        <p className="procss-des">{props.processDes}</p>
      </motion.div>
    );
}

export default ProcessCard;