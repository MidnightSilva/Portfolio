
import React, {useEffect} from "react";
import AboutMe from "../components/AboutMe";
import "aos/dist/aos.css"
import Aos from "aos";
// import Resume from "../components/Resume";

const AboutMeSection = () => {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-sine" });
  },[]);
   
  return (
    <div data-aos="fade-up" className="aboutMeSection" id="aboutme">
      <h1 className="Heading2">About Me</h1>
      <div className="aboutme-top-container">
        <div className="img-place-holder" data-aos="fade-right"></div>
        <div className="bullet-points" data-aos="fade-left">
          <p className="bullet-point">Commited to life long learning</p>
          <p className="bullet-point"> Commited to bettering the world</p>
          <p className="bullet-point">adaptable to any environment</p>
        </div>
      </div>
      {/* <Resume /> */}
      <AboutMe />
    </div>
  );
};

export default AboutMeSection;
