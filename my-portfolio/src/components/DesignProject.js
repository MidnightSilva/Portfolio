import React, { useState } from "react";
const DesignProject = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const image = require("../assets/Images/" + props.image).default;
  //   const image = require("../assets/images/" + props.image).default;
  //   const site = require("../assets/images/" + props.site).default;
  //   const code = require("../assets/images/" + props.code).default;
  //   const info = require("../assets/images/" + props.info).default;
  return (
    <>
      <div className="project" onClick={() => setDisplayModal(!displayModal)}>
        <img className="mindPassge" src={image} alt="Project-img" />
        <div className="project-tag-title-container">
          <h3 className="project-title">{props.title} </h3>
          <button className="project-tag2">{props.tag}</button>
        </div>
        {/* <div className="project-links">
          <div className="plink1">
            <a href={props.link1} target="blank" ><img className='compassRose-hover' src={site} alt='compassrose logo'/></a>
            <p className="dp-link1">Case Study</p>
          </div>
          <div className="plink2">
            <a href={props.link2} target="blank">
              {" "}
              <img src={code} className="githublogo-hover" alt="github-logo" />
            </a>
            <p className="dp-link-2">Wireframe</p>
          </div>
          <div className="plink3">
            <img
              src={info}
              className="info-btn"
              alt="info-logo"
              onClick={() => setDisplayModal(!displayModal)}
            />
            <p className="dp-link-3">info</p>
          </div>
        </div> */}
        {/* <p className="project-des2">{props.projectDescription}</p> */}
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

          <div className="modal-body">{props.modalBody}</div>
        </div>
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
    </>
  );
};

export default DesignProject;
