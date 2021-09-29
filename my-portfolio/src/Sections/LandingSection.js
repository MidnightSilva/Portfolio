import CompassIcon from "../components/CompassIcon"
import OuterCompass from "../components/OuterCompass"

const LandingSection = () => {
  return (
    <div className="landing-tile">
        <h2 className="landing-greeting">Welcome 👋🏼 I’m Jorge</h2>
        <div className="compass-container">
          <OuterCompass/>
            <CompassIcon />
          
          
        </div>

        <div class="morphing">
          <div class="word">a USN Veteran</div>
          <div class="word">UX/UI Designer &</div>
          <div class="word">Fronted Developer</div>
        </div>
      {/* <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </div>
  );
};

export default LandingSection;
