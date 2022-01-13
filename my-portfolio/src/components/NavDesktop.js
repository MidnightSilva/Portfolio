import github from "../assets/Svgs/Github.svg";
import linkedin from "../assets/Svgs/linkedin.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavDesktop = () => {
  const item2 = {
    hidden: {
      opacity: [ 0.5, 1],
      transition: { duration: 2 },
    },
  };
   const item3 = {
     hidden: {
       rotateX: 1440,
       opacity: [ 0.5, 1],
       transition: { duration: 3 },
       
     },
   };
    const item4 = {
      hidden: {
        rotateX: 1440,
        opacity: [0.5, 1],
        transition: { duration: 5 },
      },
    };
     const item5 = {
       hidden: {
         rotateX: 1440,
         opacity: [0.5, 1],
         transition: { duration: 7 },
       },
     };
      const item6 = {
        hidden: {
          rotateX: 1440,
          opacity: [0.5, 1],
          transition: { duration: 8 },
        },
      };

  return (
    <div className="navbackground-desktop">
      <Link
        activeClass="active"
        to="banner"
        spy={true}
        offset={-400}
        smooth={true}
      >
        <motion.div className="nav-heading">Silva's Portfoilo</motion.div>
      </Link>
      <motion.div className="nav-right" variants={item2} animate="hidden">
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          offset={-50}
          smooth={true}
        >
          <motion.p
            className="link1"
            variants={item3}
            animate="hidden"
            whileHover={{ scale: 1.5, color: "#cb330c" }}
          >
            About Me
          </motion.p>
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          offset={-50}
          smooth={true}
        >
          <motion.p
            className="link2"
            variants={item4}
            animate="hidden"
            whileHover={{ scale: 1.5, color: "#cb330c" }}
          >
            Projects
          </motion.p>
        </Link>

        <Link
          activeClass="active"
          to="form"
          spy={true}
          offset={-50}
          smooth={true}
        >
          <motion.p
            className="link3"
            variants={item5}
            animate="hidden"
            whileHover={{ scale: 1.5, color: "#cb330c" }}
          >
            Contact Me
          </motion.p>
        </Link>
        <a href="https://www.linkedin.com/in/jorgelsilvajr/">
          <motion.img
            src={linkedin}
            className="linkedinlogo"
            alt="linkedin-logo"
            variants={item5}
            animate="hidden"
            whileHover={{ scale: 1.5, color: "#356394" }}
          />
        </a>
        <a href="https://github.com/MidnightSilva">
          <motion.img
            src={github}
            className="githublogo"
            variants={item6}
            animate="hidden"
            whileHover={{ scale: 1.5, color: "#356394" }}
            alt="github-logo"
          />
        </a>
      </motion.div>
    </div>
  );
};
export default NavDesktop;
