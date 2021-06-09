import React from "react";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="subtitle">Skills</h2>
      <div className="skill-cards-top">
        <div className="skill-card">
          <h3 className="card-title">Tools</h3>
          <p className="skills">Figma</p>
          <p className="skills">Air Table</p>
          <p className="skills">Google Suits</p>
          <p className="skills">Pencil & Paper</p>
          <p className="skill-last">Adove crative cloud</p>
        </div>
        <div className="skill-card">
          <h3 className="card-title">Design</h3>
          <p className="skills">Wireframes</p>
          <p className="skills">Protoypes</p>
          <p className="skills">User Testing</p>
          <p className="skills">Responsive Desgin</p>
          <p className="skill-last">Information Architecture</p>
        </div>
      </div>

      <div className="skill-card2">
        <h3 className="card-title">Developemnt</h3>
        <div className="skill-card-top-row">
          <p className="skill">git</p>
          <p className="skill">Github</p>
          <p className="skill">yarn</p>
          <p className="skill">debugging</p>
          <p className="skill"> Rest API's</p>
          <p className="skill">Browser dev tools</p>
        </div>
        <div className="skill-card-middle-row">
          <p className="skill">CSS Animations</p>
          <p className="skill">Javascript ES6+ syntax</p>
          <p className="skill">React Hooks</p>
        </div>
        <div className="skill-card-bottom-row">
          <p className="skill">Responsive Design</p>
          <p className="skill">Object-oriented programming</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
