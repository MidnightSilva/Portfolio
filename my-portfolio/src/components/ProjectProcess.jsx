import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ProcessCard from "./ProcessCard";
import Processbar from "./Processbar";

const ProjectProcess = () => {
  const { game } = useContext(AppContext);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: .5,
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
      scale: [0.9, 1],
      opacity: [0.2, 0.7],
      transition: { duration: 3 },
    },
    hidden: { opacity: 0.2, scale: 0.9 },
    transition: { duration: 1 },
  };

  return (
    <>
      <motion.div
        className="process-contianer"
        variants={item}
        ref={ref}
        animate={controls}
        initial="hidden"
      >
        <Processbar />
      </motion.div>
      {(() => {
        switch (game) {
          case "start":
            return (
              <ProcessCard
                processTitle="Research"
                processDes="What is being built? why / Has it been done before? if so how?"
              />
            );
          case "playing":
            return (
              <ProcessCard
                processTitle="Plan"
                processDes="what parts of the project will take the longest?
                  build a attack plan,  "
              />
            );
          case "won":
            return (
              <ProcessCard
                processTitle="Build"
                processDes=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis."
              />
            );
          case "lost":
            return (
              <ProcessCard
                processTitle="Launch"
                processDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis. "
              />
            );
          default:
            return (
              <ProcessCard
                processTitle="Welcome"
                processDes=" Check out my Process for building a system."
              />
            );
        }
      })()}
    </>
  );
};

export default ProjectProcess;
