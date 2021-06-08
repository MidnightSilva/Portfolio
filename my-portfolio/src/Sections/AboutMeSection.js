import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";

const AboutMeSection = () => {
  return (
    <div className="aboutMeSection" id="aboutme">
      <h1 className="Heading2">About Me</h1>
      <div className="aboutme-top-container">
        <div className="img-place-holder"></div>
        <div className="bullet-points">
          <p className="bullet-point">Commited to life long learning</p>
          <p className="bullet-point"> Commited to bettering the world</p>
          <p className="bullet-point">adaptable to any environment</p>
        </div>
      </div>
      <Resume />
      <AboutMe />
    </div>
  );
};

export default AboutMeSection;
