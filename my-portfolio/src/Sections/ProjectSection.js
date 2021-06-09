import projectJson from "../Projects.json";
import Project from "../components/DevelopmentProject";
import { v4 as uuidv4 } from "uuid";
import DesignProject from "../components/DesignProject";

// need to add a ternary operater to allow to swtich between projects

// the project displaying will be filled blue

// button that is hidden will be an out line

const ProjectSection = () => {
  // add text to display when desgin button is pressed
  //  Below are the projects that I’ve gotten a chance to work on both
  //           design and development projects alike. With the design project, I keep
  //           the user experience in mind by making sure the user has a clear
  //           pathway to what they are looking for by keeping the clicks to a
  //           minimum we can retrain our user’s engagement.
  console.log(projectJson);
  console.log(projectJson.designProjects);
  return (
    <div className="Project-sec" id="project">
      <h1 className="heading4">Projects</h1>
      <div className="resume-ctas">
        <button className="download-resume">Development</button>
        <button className="view-Resume">Design</button>
      </div>
      <div className="project-des-heading">
        <p className="development-description">
          {" "}
          Below are the projects that I’ve gotten a chance to work on. Current
          development tech stack includes p HTML5, CSS3, Javascript, React,
          Node, Expres. I am able to create a fully dynamic and enganging
          website viewable on mobile screens and desktops.
        </p>
      </div>
      <div className="project-broad">
        {projectJson.Project.map((project, i) => (
          <Project {...project} key={uuidv4()} />
        ))}
        {projectJson.designProjects.map((designProjects, i) => (
          <DesignProject {...designProjects} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
