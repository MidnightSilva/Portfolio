import github from "../assets/Svgs/Github.svg";
import linkedin from "../assets/Svgs/linkedin.svg";
import { Link } from "react-scroll";
import hamburgermenu from "../assets/Svgs/hamburgerMenu.svg"
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
    const [hamburgermenuToggle, setHamburgerMenuToggle] = useState(false);
    const [siteHeadingToggle, setSiteHeadingToggle] = useState(false);

    const toggleSiteHeading =()=>{
      siteHeadingToggle ? setSiteHeadingToggle(true) : setSiteHeadingToggle(false)
    }

    const toggleHamburgerMenu = () => {
      hamburgermenuToggle ? setHamburgerMenuToggle(false) : setHamburgerMenuToggle(true);
    };
     const [message, setMessage] = useState(false);

     const handleMessageModal = (toggleHamburgerMenu) => {
       message ? setMessage(false) : setMessage(true);
        hamburgermenuToggle
          ? setHamburgerMenuToggle(false)
          : setHamburgerMenuToggle(true);
     };


 
  const item3 = {
    hidden: {
    scale:[-3,.5,1],
      opacity: [0, 0, 0, 0.5, 1],
      transition: { duration: 3 },
    },
  };

  return (
    <motion.div variants={item3} animate="hidden">
      <div className="navbackground-mobile">
        <div className="nav-right">
          <motion.p
            className={`nav-heading ${hamburgermenuToggle ? "Show" : ""}`}
            onClick={toggleSiteHeading}
          >
            Silva's Portfoilo
          </motion.p>
        </div>

        <motion.div className="nav-left">
          <motion.img
            alt="hamburger menu"
            src={hamburgermenu}
            variants={item3}
            whileHover={{ scale: 1.5, color: "#356394" }}
            whileTap={{ scale: [0.9, 1] }}
            className={`hamburger-menu-icon ${
              hamburgermenuToggle ? "Show" : ""
            }`}
            onClick={toggleHamburgerMenu}
          />
        </motion.div>
      </div>

      <motion.div
        className={`hamburgerMenu ${hamburgermenuToggle ? "Show" : ""}`}
      >
        <Link activeClass="active" to="aboutme" spy={true} smooth={true}>
          <motion.p
            variants={item3}
            className="link"
            onClick={toggleHamburgerMenu}
          >
            About Me
          </motion.p>
        </Link>
        <Link activeClass="active" to="project" spy={true} smooth={true}>
          <motion.p
            variants={item3}
            whileTap={{ scale: [0.7, 1] }}
            className="link"
            onClick={toggleHamburgerMenu}
          >
            Projects
          </motion.p>
        </Link>
        <Link activeClass="active" to="form" spy={true} smooth={true}>
          <p className="link" onClick={handleMessageModal}>
            Contact Me
          </p>
        </Link>
        <a
          href="https://www.linkedin.com/in/jorgelsilvajr/"
          onClick={toggleHamburgerMenu}
          className="link-a"
        >
          <motion.p variants={item3} whileTap={{ scale: [0.7, 1] }}>
            linkedin
          </motion.p>
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
      </motion.div>
    </motion.div>
  );
};
export default Nav;
