import AboutMeNavigation from "../components/AboutMeNavigation.jsx"

import {Route,BrowserRouter } from "react-router-dom";
import WhoIAm from "../components/WhoIAm.jsx";
import Tech from "../components/Tech.jsx";

const AboutMeSection = () => {
 
   
  return (
    <BrowserRouter>
      <div className="aboutMeSection" id="aboutme">
        <AboutMeNavigation />
        <Route exact path="/"  component={WhoIAm} />
        <Route path="/tech" component={Tech} />
      </div>
    </BrowserRouter>
  );
};

export default AboutMeSection;
