
import LandingSection from "../Sections/LandingSection";
import AboutMeSection from "../Sections/AboutMeSection";
import ProjectSection from "../Sections/ProjectSection";

const HomePage = () => {
  return (
    <>
      <div className="Main-Sec">
        <LandingSection />
      </div>
      <AboutMeSection />
      <ProjectSection />
    </>
  );
};
export default HomePage;
