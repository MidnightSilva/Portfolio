import Skills from "../Sections/Skills";
import LandingSection from "../Sections/LandingSection";
import AboutMeSection from "../Sections/AboutMeSection";
// import ProjectSection from "../Sections/ProjectSection";
// import ContactSection from "../Sections/ContactSection";

const HomePage = () => {
  return (
    <div className="Main-Sec">
      <LandingSection />
      <AboutMeSection />
      <Skills />
      {/* <ProjectSection />
      <ContactSection />  */}
    </div>
  );
};
export default HomePage;
