import github from "../assets/Svgs/Github.svg";
import linkedin from "../assets/Svgs/linkedin.svg";
import { Link } from "react-scroll";
import hamburgermenu from "../assets/Svgs/hamburgerMenu.svg"
import { useState } from "react";

const Nav = () => {
    const [hamburgermenuToggle, setHamburgerMenuToggle] = useState(false);

    const toggleHamburgerMenu = () => {
      hamburgermenuToggle ? setHamburgerMenuToggle(false) : setHamburgerMenuToggle(true);
    };


  return (
    <>
      <div className="navbackground">
        <div className="nav-right">
          <p className="nav-heading">Silva's Portfoilo</p>
        </div>

        <div className="nav-left">
          <img
            alt="hamburger menu"
            src={hamburgermenu}
            className={`hamburger-menu-icon ${
              hamburgermenuToggle ? "Show" : ""
            }`}
            onClick={toggleHamburgerMenu}
          />
        </div>
      </div>
      <div className={`hamburgerMenu ${hamburgermenuToggle ? "Show" : ""}`}>
        <Link activeClass="active" to="aboutme" spy={true} smooth={true}>
          <p className="link" onClick={toggleHamburgerMenu}>
            About Me
          </p>
        </Link>
        <Link activeClass="active" to="project" spy={true} smooth={true}>
          <p className="link" onClick={toggleHamburgerMenu}>
            Projects
          </p>
        </Link>
        <Link activeClass="active" to="form" spy={true} smooth={true}>
          <p className="link">Contact Me</p>
        </Link>
        <a
          href="https://www.linkedin.com/in/jorgelsilvajr/"
          onClick={toggleHamburgerMenu}
          className="link-a"
        >
          <p>linkedin</p>
          <img
            src={linkedin}
            className="linkedinlogo"
            alt="linkedin-logo"
          ></img>
        </a>
        <a
          href="https://github.com/MidnightSilva"
          className="link-a"
          onClick={toggleHamburgerMenu}
        >
          Github
          <img src={github} className="githublogo" alt="github-logo" />
        </a>
      </div>
    </>
  );
};
export default Nav;
