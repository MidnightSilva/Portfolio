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
      <div className="project">
        <h3 className="project-title">{props.title} </h3>
        {/* <img className='mindPassge' src={image} alt='Project-img'/> */}
        <span className="project-tag">{props.tag}</span>
        {/* <div className="project-links">
          <div className="plink1">
            <a href={props.link1} target="blank" ><img className='compassRose-hover' src={site} alt='compassrose logo'/></a>
            <p className="p-link1">Site</p>
          </div>
          <div className="plink2">
            <a href={props.link2} target="blank" > <img  src={code} className='githublogo-hover' alt='github-logo'/></a> 
            <p className="p-link-2">Code</p>
          </div>
          <div className="plink3">
            <img  src={info} className='info-btn' alt='info-logo' onClick={() => setDisplayModal(!displayModal)}/>
            <p className="p-link-3">info</p>
          </div>
        </div>
        <p className="project-des">{props.projectDescription}</p> */}
      </div>
      <div className="line"></div>
      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 className="modal-title">{props.modalTitle}</h3>
            <button
              className="Close"
              onClick={() => setDisplayModal(!displayModal)}
            >
              X
            </button>
          </div>

          <div className="modal-body">
            <div className="techheading">Tech Call Out's</div>
            <div className="side-images">
              {/* <img className='tech-logo-1' src={tech1} alt='react-logo'/>
                <img className='tech-logo-2' src={tech2} alt='react-logo'/>
                <img className='tech-logo-3' src={tech3} alt='react-logo'/> */}
            </div>
            <div className="project-points">
              <ul className="project-points1">
                <li className="p1">{props.projectPoint1}</li>
                <li className="p2">{props.projectPoint2}</li>
                <li className="p3">{props.projectPoint3}</li>
                <li className="p4">{props.projectPoint4}</li>
              </ul>
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
