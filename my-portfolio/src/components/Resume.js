import React, { useState } from "react";

const Resume = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="resume-container">
      <h2 className="subtitle">Resume</h2>
      <div className="resume-ctas">
        <button className="download-resume">Download</button>
        <button
          className="view-Resume"
          onClick={() => setDisplayModal(!displayModal)}
        >
          View
        </button>
        <div className={`Modal ${displayModal ? "Show" : ""}`}>
          <div class="modal-dialog">
            <button
              className="Close-resume"
              onClick={() => setDisplayModal(!displayModal)}
            >
              X
            </button>
          </div>
          <div className="modal-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

