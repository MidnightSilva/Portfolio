import React, { useState , useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Project = (props) => {
  const [displayModal, setDisplayModal] = useState(false);


//  const onlyOneProject =() =>{

//  displayModal ? setDisplayModal(true) : setDisplayModal(false);
//  displayModal ? setDisplayModal(false) : setDisplayModal(true);
//  }

 const controls = useAnimation();
 const [ref, inView] = useInView({
   threshold: 0.9,
 });

 useEffect(() => {
   if (inView) {
     controls.start("visible");
   } else {
     controls.start("hidden");
   }
 }, [controls, inView]);

const item = {
  visible: {
    scale: [0.8, 1],
    opacity: [0.2, 1],
    transition: { duration: 3 },
  },
  hidden: { opacity: 0.2, scale: 0.9 },
  transition: { duration: 1 },
};
  const image = require("../../assets/Images/" + props.image).default;
  return (
    <motion.div
      ariants={item}
      ref={ref}
      animate={controls}
      initial="hidden"
      onClick={() => setDisplayModal(!displayModal)}
      className="project-container .Show"
    >
      <div className="project">
        <img className="mindPassge" src={image} alt="Project-img" />
        <div className="project-tag-title-container">
          <span className="project-title">{props.title} </span>
          {/* <span className="project-tag">{props.tag}</span> */}
        </div>
      </div>
      <motion.div
        ariants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
        className="Modal.show"
        onClick={() => setDisplayModal(!displayModal)}
      >
        {/* <div class="modal-dialog">
          <p className="project-des">{props.projectDescription}</p>
          <div className="tag-container">
            <p className="tags">{props.tag1}</p>
            <p className="tags">{props.tag2}</p>
            <p className="tags">{props.tag3}</p>
            <p className="tags">{props.tag4}</p>
            <p className="tags">{props.tag5}</p>
            <p className="tags">{props.tag6}</p>
          </div>

          <div className="modal-body">
            <li className="p1">{props.projectPoint1}</li>
            <li className="p1">{props.projectPoint2}</li>
            <li className="p1">{props.projectPoint3}</li>
            <li className="p1">{props.projectPoint4}</li>
            <li className="p1">{props.projectPoint5}</li>
            <li className="p1">{props.projectPoint6}</li>
            <li className="p1">{props.projectPoint7}</li>
            <div className="project-links">
              <a className="p-link1" href={props.link1} target="blank">
                Site
              </a>
              <a className="p-link-2" href={props.link2} target="blank">
                Code
              </a>
            </div>
          </div>
        </div>  */}
        
      </motion.div>
    </motion.div>
  );
};

export default Project;
