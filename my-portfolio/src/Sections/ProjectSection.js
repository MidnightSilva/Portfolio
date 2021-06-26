import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import projectJson from "../Projects.json";
import Project from "../components/DevelopmentProject";
import { v4 as uuidv4 } from "uuid";
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
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

  return (
    <div className="Project-sec" id="project">
      <h1 className="heading4" data-aos="fade-left">
        Projects
      </h1>

      <div className="project-des-heading">
        <div className="project-toggle" data-aos="zoom-in">
          <button
            className={`button-toggle ${toggle ? "true" : ""}`}
            onClick={toggleProjects}
          >
            Development
          </button>

          <button
            className={`button-toggle2 ${design ? "" : "false"}`}
            onClick={toggleProject2}
          >
            {" "}
            Design
          </button>
        </div>
        <p className="development-description" data-aos="fade-left">
          {" "}
          Below are the projects that I’ve gotten a chance to work on. Current
          development tech stack includes p HTML5, CSS3, Javascript, React,
          Node, Expres. I am able to create a fully dynamic and enganging
          website viewable on mobile screens and desktops.
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
