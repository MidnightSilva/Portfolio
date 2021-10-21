import github from "../assets/Svgs/Github.svg";
import linkedin from "../assets/Svgs/linkedin.svg";
import { Link } from "react-scroll";

const NavDesktop = () => {
  return (
    <div className="navbackground-desktop">
      <div className="nav-heading">Silva's Portfoilo</div>
      <div className="nav-right">
        <Link activeClass="active" to="aboutme" spy={true} smooth={true}>
          <p className="link1">About Me</p>
        </Link>
        <Link activeClass="active" to="project" spy={true} smooth={true}>
          <p className="link2">Projects</p>
        </Link>

        <Link activeClass="active" to="form" spy={true} smooth={true}>
          <p className="link3">Contact Me</p>
        </Link>
        <a href="https://www.linkedin.com/in/jorgelsilvajr/">
          <img src={linkedin} className="linkedinlogo" alt="linkedin-logo" />
        </a>
        <a href="https://github.com/MidnightSilva">
          <img src={github} className="githublogo" alt="github-logo" />
        </a>
      </div>
    </div>
  );
};
export default NavDesktop;
