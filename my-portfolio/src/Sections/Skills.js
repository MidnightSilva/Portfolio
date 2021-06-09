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
          <p className="skills">Adove crative cloud</p>
        </div>
        <div className="skill-card">
          <h3 className="card-title">Design</h3>
          <p className="skills">Wireframes</p>
          <p className="skills">Protoypes</p>
          <p className="skills">User Testing</p>
          <p className="skills">Responsive Desgin</p>
          <p className="skills"></p>
        </div>
      </div>

      <div className="skill-card2">
        <h3 className="card-title">Developemnt</h3>
        <div className="skill-card-top-row">
          <p className="skills">git</p>
          <p className="skills">Github</p>
          <p className="skills">yarn</p>
          <p className="skills">debugging</p>
          <p className="skills"> Rest API's</p>
          <p className="skills">Browser dev tools</p>
        </div>
        <div className="skill-card-middle-row">
          <p className="skills">CSS Animations</p>
          <p className="skills">Javascript ES6+ syntax</p>
          <p className="skills">React Hooks</p>
        </div>
        <div className="skill-card-bottom-row">
          <p className="skills">Responsive Design</p>
          <p className="skills">Object-oriented programming</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
