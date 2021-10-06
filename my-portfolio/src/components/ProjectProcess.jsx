import Process1of4 from '../assets/Svgs/Process1of4.svg'
import Process2of4 from "../assets/Svgs/Process2of4.svg";
import Process3of4 from "../assets/Svgs/Process3of4.svg";
import Process4of4 from "../assets/Svgs/Process4of4.svg";
import { motion } from "framer-motion"
const ProjectProcess = () => {
    const item = {
      hidden: {
        opacity: [0, 0.2, 0.5],
        scale: [0.6, 1],
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
      <>
        <motion.div
          className="process-contianer"
          variants={item}
          animate="hidden"
        >
          <img className="process-step1" src={Process1of4} alt="" />
          <img className="process-step2" src={Process2of4} alt="" />
          <img className="process-step3" src={Process3of4} alt="" />
          <img className="process-step4" src={Process4of4} alt="" />
        </motion.div>
        <motion.div
          className="process-step1-des-container"
          variants={item2}
          animate="hidden"
        >
          <h3 className="process-heading">Research</h3>
          <p className="procss-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis.
          </p>
        </motion.div>
      </>
    );
}

export default ProjectProcess