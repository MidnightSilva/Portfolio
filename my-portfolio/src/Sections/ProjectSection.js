
// import React, {  useState } from "react";
import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import projectJson from "../Projects.json";
// import Projectlayout from "../components/Projectlayout";
import PlanttFactSiteProject from "../components/Projects/PlanttFactSiteProject";
// import BlogSiteProject from "../components/BlogSiteProject";
// import KitchenHelperProject from "../components/KitchenHelperProject";
const ProjectSection = () => {
  // const [toggle, setToggle] = useState(true);
  // const [design, setDesign] = useState(true);



  const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 1.5,
  // });

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

  



   console.log(projectJson)

  // const toggleProject2 = () => {
  //       design ? setDesign(false) : setDesign(true);
  //   toggle ? setToggle(false) : setToggle(true);
  // };


  return (
    <motion.div
      variants={item}
      // ref={ref}
      animate={controls}
      initial="hidden"
      className="Project-sec"
      id="project"
    >
      <h1 className="heading4" data-aos="fade-left">
        <span className="firstletterofheading">P</span>rojects
      </h1>

      <div className="project-des-heading">
        <p className="development-description">
          {" "}
          Below are some of the project I have worked on, please feel free to check out the website or the github account you'll find all links inculded wtih each project.
        </p>
      </div>

      <motion.div className="project-broad">

        < PlanttFactSiteProject />
        {/* <BlogSiteProject />
        <KitchenHelperProject/> */}
      </motion.div>
      <label></label>
    </motion.div>
  );
};

export default ProjectSection;
