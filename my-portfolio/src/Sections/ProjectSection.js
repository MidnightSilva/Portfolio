import React, { useState, } from "react";

import projectJson from "../Projects.json";
import Project from "../components/DevelopmentProject";
import { v4 as uuidv4 } from "uuid";
import DevelopmentProjects from '../assets/Svgs/DevelopmentProject.svg'
import DesignProjects from "../assets/Svgs/DesginProject.svg";
import DesignProject from "../components/DesignProject";


const ProjectSection = () => {
  const [toggle, setToggle] = useState(true);
  const [design, setDesign] = useState(true);


  const toggleProjects = (toggleProject2) => {
    toggle ? setToggle(false) : setToggle(true);
    design ? setDesign(false) : setDesign(true);
  };
  const toggleProject2 = () => {
    design ? setDesign(false) : setDesign(true);
    toggle ? setToggle(false) : setToggle(true);
  };


  return (
    <div className="Project-sec" id="project">
      <h1 className="heading4" data-aos="fade-left">
        Projects
      </h1>

      <div className="project-des-heading">
        <div className="project-toggle">
          <div className="project-svg-container-development">
            {" "}
            <img
              className={`project-svg${design ? "Show" : ""}`}
              src={DevelopmentProjects}
              alt="development"
              onClick={toggleProjects}
            />
            <p className={`project-svg-development${design ? "Show" : ""}`}>Development</p>
          </div>
          <div className="project-svg-container-desgin">
            {" "}
            <img
              className={`project-svg-deign${design ? "" : "Show"}`}
              src={DesignProjects}
              alt="desgin"
              onClick={toggleProject2}
            />
            <p
              className={`project-svg-desgin${design ? "Show" : ""}`}>
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

      <div className="project-broad">
        {toggle === true && design === true
          ? projectJson.Project.map((project, i) => (
              <Project {...project} key={uuidv4()} />
            ))
          : null}

        {design === false && toggle === false
          ? projectJson.designProjects.map((designProjects, i) => (
              <DesignProject {...designProjects} key={uuidv4()} />
            ))
          : null}
      </div>
      <label></label>
    </div>
  );
};

export default ProjectSection;
