import React, { useState } from "react";


const DesignProject = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const image = require("../assets/Images/" + props.image).default;

  return (
    <>
      <div className="project" onClick={() => setDisplayModal(!displayModal)}>
        <img className="mindPassge" src={image} alt="Project-img" />
        <div className="project-tag-title-container">
          <h3 className="project-title">{props.title} </h3>
          <button className="project-tag2">{props.tag}</button>
        </div>
      </div>

      <div className="line"></div>
      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <div class="modal-dialog">
          {/* <div class="modal-header">
            <button
              className="Close"
              onClick={() => setDisplayModal(!displayModal)}
            >
              X
            </button>
            <img className="mindPassge" src={image} alt="Project-img" />
          </div> */}

          <div className="modal-body">{props.modalBody}</div>
        </div>
      </div>
      
    </>
  );
};

export default DesignProject;
