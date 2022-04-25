
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectJson from "../Projects.json";
import Project from "../components/DevelopmentProject";
import { v4 as uuidv4 } from "uuid";
import DesignProjects from "../assets/Svgs/DesginProject.svg";


const ProjectSection = () => {
  const [toggle, setToggle] = useState(true);
  const [design, setDesign] = useState(true);



  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
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
      opacity: [0.5, 1],
      scale: 1,
      transition: { duration: 2 },
    },
    hidden: { opacity: 0.2},
   
  };

  





  const toggleProject2 = () => {
        design ? setDesign(false) : setDesign(true);
    toggle ? setToggle(false) : setToggle(true);
  };


  return (
    <motion.div
      variants={item}
      ref={ref}
      animate={controls}
      initial="hidden"
      className="Project-sec"
      id="project"
    >
      <h1 className="heading4" data-aos="fade-left">
        Projects
      </h1>

      <div className="project-des-heading">
        <div className="project-toggle">
          <div className="project-svg-container-desgin">
            {" "}
            <img
              className={`project-svg-deign${design ? "" : "Show"}`}
              src={DesignProjects}
              alt="desgin"
              onClick={toggleProject2}
            />
            <p className={`project-svg-desgin${design ? "Show" : ""}`}>
              Desgin
            </p>
          </div>
        </div>
        <p className="development-description">
          {" "}
          Below are the projects that I’ve gotten a chance to work on. Feel free
          to move between development or desgin Projects.
        </p>
      </div>

      <motion.div className="project-broad">
        {projectJson.Project.map((project, i) => (
          <Project {...project} key={uuidv4()} />
        ))}
      </motion.div>
      <label></label>
    </motion.div>
  );
};

export default ProjectSection;
