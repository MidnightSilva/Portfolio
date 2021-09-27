import {Link} from "react-router-dom";
const AboutMeNavigation = () => {
  return (
    <div className="aboutme-navigation">
      <h1 className="Heading2">About Me</h1>

      <ul className="aboutme-points">
        <Link to="/">
          {" "}
          <il className="bullet-points">Who i am</il>
        </Link>
        <Link to='/tech'>
          {" "}
          <il className="bullet-points">Tech</il>
        </Link>

        <Link to='/process'>
          <il className="bullet-points">process</il>
        </Link>
      </ul>
    </div>
  );
};

export default AboutMeNavigation;
