
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

  return (
    <div className="skills-container">
      <h2 className="subtitle">Current tech: </h2>
      <div className="logo-container">
        <img className="skill-logo" src={acc} alt="adobecreative-cloud-logo" />
        <img className="skill-logo" src={figma} alt="figma-logo" />{" "}
        <img className="skill-logo" src={git} alt="git-logo" />{" "}
        <img className="skill-logo" src={github} alt="github-logo" />{" "}
        <img className="skill-logo" src={html} alt="html-logo" />{" "}
        <img className="skill-logo" src={css} alt="css-logo" />{" "}
        <img className="skill-logo" src={sass} alt="sass-logo" />{" "}
        <img className="skill-logo" src={javascript} alt="javascript-logo" />{" "}
        <img className="skill-logo" src={react} alt="react-logo" />{" "}
        <img className="skill-logo" src={node} alt="node-logo" />{" "}
        <img className="skill-logo" src={mongodb} alt="mongodb-logo" />{" "}
        <img className="skill-logo" src={jest} alt="jest-logo" />
      </div>
      <div className="skill-card-container">
        <div className="skill-card">
          <div className="skill-title-logo-container">
            <h3 className="card-title">Design</h3>
            <img className="skill-logo1" src={design} alt="design-logo" />
          </div>
          <p className="skills">
            Integrating what I learned about User experience design from
            BrainStation , I able to create wireframes & prototypes. Implement
            best practices such as control & freedom, error prevention,
            Navigation, Alignment, Buttons/CTAs, Consistency. Keeping this
            things in mind allow me to create a good user experience.
          </p>
        </div>

        <div className="skill-card2">
          <div className="skill-title-logo-container2">
            <h3 className="card-title2">Developemnt</h3>
            <img className="skill-logo2" src={development} alt="dev-logo" />
          </div>
          <p className="skills">
            Integrating what I learned about Full Stack Development from
            BrainStation,I am able to fully create responsive sites across
            different browser types. Able to work with rest Api’s. Experienced
            with MERN stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
