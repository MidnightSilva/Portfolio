import {Link} from "react-router-dom";
import { useState } from "react";
const AboutMeNavigation = () => {
   const [who, setWho] = useState(true);
 const [tech , setTech ] = useState(true);
   const [process, setProcess] = useState(false);

const handleWhoUnderline = () => {
  who ? setWho(true) : setWho(true);
tech ? setTech(true) : setTech(true);
  process ? setProcess(false) : setProcess(false);
};

const handleTechUnderline = () => {
  who ? setWho(false) : setWho(false);
tech ? setTech(false) : setTech(false);
  process ? setProcess(false) : setProcess(false);
};

const handleProcessUnderline = () => {
who ? setWho(false) : setWho(false);
tech ? setTech(true) : setTech(true);
  process ? setProcess(true) : setProcess(true);
};




  return (
    <div className="aboutme-navigation">
      <h1 className="Heading2">About Me</h1>

      <ul className="aboutme-points">
        <Link to="/">
          {" "}
          <il
            className={`aboutme-nav-1${who ? "Show" : ""}`}
            onClick={() => handleWhoUnderline(!handleWhoUnderline)}
          >
            Who i am
          </il>
        </Link>
        <Link to="/tech">
          {" "}
          <il
            className={`aboutme-nav-2${tech ? "Show" : ""}`}
            onClick={() => handleTechUnderline(!handleTechUnderline)}
          >
            Tech
          </il>
        </Link>

        <Link to="/process">
          <il
            className={`aboutme-nav-3${process ? "Show" : ""}`}
            onClick={() => handleProcessUnderline(!handleProcessUnderline)}
          >
            Process
          </il>
        </Link>
      </ul>
    </div>
  );
};

export default AboutMeNavigation;
