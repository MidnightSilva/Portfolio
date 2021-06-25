import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const DesignProject = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const image = require("../assets/Images/" + props.image).default;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in"
        className="project"
        onClick={() => setDisplayModal(!displayModal)}
      >
        <img className="mindPassge" src={image} alt="Project-img" />
        <div className="project-tag-title-container">
          <h3 className="project-title">{props.title} </h3>
          <button className="project-tag2">{props.tag}</button>
        </div>
      </div>

      <div data-aos="zoom-in" className="line"></div>
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
