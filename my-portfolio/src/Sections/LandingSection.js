import StarIcon from "../components/StarIcon";
import CompassIcon from "../components/CompassIcon";

import "../_morphing.scss";

const LandingSection = () => {
  return (
    <div className="landing-tile">
      <div className="top-star-controller">
        <StarIcon />
        <StarIcon />
      </div>
      <StarIcon />
      <div className="greating-compass-container">
        <h2 className="landing-greeting">Welcome 👋🏼 I’m Jorge</h2>
        <CompassIcon />
        {/* <div class="morphing">
          <div class="word">a USN Veteran</div>
          <div class="word">UX/UI Designer &</div>
          <div class="word">Fronted Developer</div>
        </div> */}
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
