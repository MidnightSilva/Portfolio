import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
// import Resume from "../components/Resume";
import development from "../assets/Svgs/Development.svg";
import design from "../assets/Svgs/Design.svg";
import acc from "../assets/Svgs/Creative_Cloud.svg";
import git from "../assets/Svgs/git-icon.svg";
import github from "../assets/Svgs/Github.svg";
import figma from "../assets/Svgs/Figma.svg";
import html from "../assets/Svgs/html5.svg";
import css from "../assets/Svgs/css-5.svg";
import sass from "../assets/Svgs/sass-1.svg";
import javascript from "../assets/Svgs/logo-javascript.svg";
import react from "../assets/Svgs/react-2.svg";
import node from "../assets/Svgs/nodejs-icon.svg";
import mongodb from "../assets/Svgs/mongodb.svg";
import jest from "../assets/Svgs/jest-seeklogo.com.svg";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="skills-container">
      <h2 className="subtitle" data-aos="fade-up">
        Current tech in use:{" "}
      </h2>
      <div className="logo-container">
        <img data-aos="fade-up"className="skill-logo" src={acc} alt="adobecreative-cloud-logo" />
        <img data-aos="fade-up"className="skill-logo" src={figma} alt="figma-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={git} alt="git-logo" />{" "}
        <img data-aos="fade-up" className="skill-logo" src={github} alt="github-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={html} alt="html-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={css} alt="css-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={sass} alt="sass-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={javascript} alt="javascript-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={react} alt="react-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={node} alt="node-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={mongodb} alt="mongodb-logo" />{" "}
        <img data-aos="fade-up"className="skill-logo" src={jest} alt="jest-logo" />
      </div>
      {/* <Resume /> */}
      <div className="skill-cards-top">
        {/* <div className="skill-card">
          <div className="skill-title-logo-container">
            {" "}
            <h3 className="card-title">Tools</h3>
            <img className="skill-logo" src={tool} alt="tools-logo" />
          </div>
          <p className="skill-last">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
            ut arcu interdum id porttitor auctor at. Euismod mauris, auctor id
            accumsan magna proin sit. Neque, massa sodales in nibh in urna,
            lobortis vel id. Sit feugiat amet luctus vitae at sagittis pretium
            vitae amet.
          </p>
          <p className="skill-last">Adobe crative cloud</p>
          <p className="skills">Google Suits</p>
          <p className="skills">Air Table</p>
          <p className="skills">Github</p>
          <p className="skills">Figma</p>
          <p className="skills">Yarn</p>
          <p className="skills">Git</p>
        </div> */}
        <div className="skill-card2">
          <div className="skill-title-logo-container2">
            <h3 className="card-title">Design</h3>
            <img className="skill-logo" src={design} alt="design-logo" />
          </div>
          <p className="skills">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
            ut arcu interdum id porttitor auctor at. Euismod mauris, auctor id
            accumsan magna proin sit. Neque, massa sodales in nibh in urna,
            lobortis vel id. Sit feugiat amet luctus vitae at sagittis pretium
            vitae amet.
          </p>
          {/* <p className="skills">Protoypes</p>
          <p className="skills">Wireframes</p>
          <p className="skills">User Testing</p>
          <p className="skills">Responsive Desgin</p>
          <p className="skill-last">Information Architecture</p>
          <p className="skill-last">Information Architecture</p>
          <p className="skill-last">Information Architecture</p> */}
        </div>
      </div>

      <div className="skill-card2">
        <div className="skill-title-logo-container2">
          <h3 className="card-title">Developemnt</h3>
          <img className="skill-logo" src={development} alt="dev-logo" />
        </div>
        <p className="skills">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est ut
          arcu interdum id porttitor auctor at. Euismod mauris, auctor id
          accumsan magna proin sit. Neque, massa sodales in nibh in urna,
          lobortis vel id. Sit feugiat amet luctus vitae at sagittis pretium
          vitae amet.
        </p>
        {/* <div className="skill-card-top-row">
          <p className="skill">HTML</p>
          <p className="skill">CSS / SASS </p>
          <p className="skill">Javascript</p>
          <p className="skill">React</p>
          <p className="skill">Node</p>
          <p className="skill">MongoDB</p>
        </div>
        <div className="skill-card-middle-row">
          <p className="skill">Rest API's</p>
          <p className="skill">MVC</p>
          <p className="skill">Debugging</p>
          <p className="skill">testing w/ Jest</p>
        </div>
        <div className="skill-card-bottom-row">
          <p className="skill">Object-oriented programming</p>
          <p className="skill">promise async await</p>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
