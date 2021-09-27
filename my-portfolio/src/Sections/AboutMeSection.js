import AboutMeNavigation from "../components/AboutMeNavigation.jsx"
// import Resume from "../components/Resume";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import WhoIAm from "../components/WhoIAm.jsx";
import Tech from "../components/Tech.jsx";
import Process from "../components/Process.jsx";

const AboutMeSection = () => {
 
   
  return (
    <BrowserRouter>
      <div className="aboutMeSection" id="aboutme">
        <AboutMeNavigation />
        <Route exact path="/"  component={WhoIAm} />
        <Route path="/tech" component={Tech} />
        <Route path="/process" component={Process} />
      </div>
    </BrowserRouter>
  );
};

export default AboutMeSection;
