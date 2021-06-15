import React, { useState } from "react";

const Project = (props) => {
  const [displayModal, setDisplayModal] = useState(false);

  // const image = require('../assets/images/' + props.image).default
  // const site = require('../assets/images/' + props.site).default
  // const code = require('../assets/images/' + props.code).default
  // const info = require('../assets/images/' + props.info).default
  // const tech1 = require('../assets/images/' + props.tech1).default
  // const tech2 = require('../assets/images/' + props.tech2).default
  // const tech3 = require('../assets/images/' + props.tech3).default
  return (
    <>
      <div className="project" onClick={() => setDisplayModal(!displayModal)}>
        <h3 className="project-title">{props.title} </h3>
        {/* <img className='mindPassge' src={image} alt='Project-img'/> */}
        <span className="project-tag">{props.tag}</span>
      </div>
      <div className="line"></div>
      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <div class="modal-dialog">
          <div class="modal-header">
            <button
              className="Close"
              onClick={() => setDisplayModal(!displayModal)}
            >
              X
            </button>
            <span className="modal-project-tag">{props.tag}</span>
          </div>
          <div className="modal-tag-section">
            <p className="project-tech-used">Tech used for:</p>
            <p className="modal-title">{props.modalTitle}</p>
          </div>
          <p className="project-des">{props.projectDescription}</p>
          <div className="tag-container">
            <p className="tags">{props.tag1}</p>
            <p className="tags">{props.tag2}</p>
            <p className="tags">{props.tag3}</p>
            <p className="tags">{props.tag4}</p>
            <p className="tags">{props.tag5}</p>
            <p className="tags">{props.tag6}</p>
          </div>

          <div className="modal-body">
            <li className="p1">{props.projectPoint1}</li>
            <li className="p1">{props.projectPoint2}</li>
            <li className="p1">{props.projectPoint3}</li>
            <li className="p1">{props.projectPoint4}</li>
            <li className="p1">{props.projectPoint5}</li>
            <li className="p1">{props.projectPoint6}</li>
            <li className="p1">{props.projectPoint7}</li>
            <div className="project-links">
                <a  className="p-link1" href={props.link1} target="blank">Site
                </a>
                <a className="p-link-2" href={props.link2} target="blank">Code
                </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
    </>
  );
};

export default Project;
