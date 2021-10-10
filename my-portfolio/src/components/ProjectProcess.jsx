
import { useState } from "react"
import { motion } from "framer-motion"
import ProcessCard from './ProcessCard';
import Processbar from "./Processbar";
const ProjectProcess = () => {

// const [process, setProcess ] = useState(false)
const [game, ] = useState("start");

// const toggleProcess =() =>{
//   process ? setProcess(false) : setProcess(true)
// }
//  const handleClick = (gameState) => {
//    setGame(gameState);
//  };
    const item = {
      hidden: {
        opacity: [0, 0.2, 0.5],
        scale: [0.6, 1],
        transition: { duration: 3 },
      },
    };
    return (
      <>
        <motion.div
          className="process-contianer"
          variants={item}
          animate="hidden"
        >
          <Processbar/>
        </motion.div>
        {(() => {
          switch (game) {
            case "start":
              return (
                <ProcessCard
                  processTitle="Research"
                  processDes=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis."
                />
              );
            case "playing":
              return (
                <ProcessCard
                  processTitle="Plan"
                  processDes=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis."
                />
              );
            case "won":
              return (
                <ProcessCard
                  processTitle="Build"
                  processDes=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis."
                />
              );
            case "lost":
              return (
                <ProcessCard
                  processTitle="Launch"
                  processDes=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis."
                />
              );
            default:
              return null;
          }
        })()}
      </>
    );
}

export default ProjectProcess