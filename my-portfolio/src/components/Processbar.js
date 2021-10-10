import Process1of4 from "../assets/Svgs/Process1of4.svg";
import Process1of4Pressed from "../assets/Svgs/Process1of4Pressed.svg";

import Process2of4 from "../assets/Svgs/Process2of4.svg";
import Process2of4Pressed from "../assets/Svgs/Process2of4Pressed.svg";

import Process3of4 from "../assets/Svgs/Process3of4.svg";
import Process3of4Pressed from "../assets/Svgs/Process3of4Pressed.svg";

import Process4of4 from "../assets/Svgs/Process4of4.svg";
import Process4of4Pressed from "../assets/Svgs/Process4of4Pressed.svg";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { motion } from "framer-motion";

const Processbar = () => {

      const {
        process1,
        process2,
        process3,
        process4,
        handleClickProcess1Of4,
        handleClickProces21Of4,
        handleClickProces3Of4,
        handleClickProcess4Of4,
      } = useContext(AppContext);
const item = {
  hidden: {
    opacity: [0, 0.2, 1],
    scale: [0.6, 1],
    transition: { duration: 3 },
  },
};
  return (
      
    <div>
      {process1 ? (
        <motion.img
          className="process-step1"
          src={Process1of4Pressed}
          alt=""
          onClick={handleClickProcess1Of4}
          variants={item}
          animate="hidden"
        />
      ) : (
        <motion.img
          className="process-step1"
          src={Process1of4}
          alt=""
          onClick={handleClickProcess1Of4}
          variants={item}
          animate="hidden"
        />
      )}

      {process2 ? (
        <motion.img
          className="process-step2"
          src={Process2of4Pressed}
          alt=""
          onClick={handleClickProces21Of4}
          variants={item}
          animate="hidden"
        />
      ) : (
        <motion.img
          className="process-step2"
          src={Process2of4}
          alt=""
          onClick={handleClickProces21Of4}
          variants={item}
          animate="hidden"
        />
      )}

      {process3 ? (
        <motion.img
          className="process-step3"
          src={Process3of4Pressed}
          alt=""
          onClick={handleClickProces3Of4}
          variants={item}
          animate="hidden"
        />
      ) : (
        <motion.img
          className="process-step3"
          src={Process3of4}
          alt=""
          onClick={handleClickProces3Of4}
          variants={item}
          animate="hidden"
        />
      )}
      {process4 ? (
        <motion.img
          className="process-step4"
          src={Process4of4Pressed}
          alt=""
          onClick={handleClickProcess4Of4}
          variants={item}
          animate="hidden"
        />
      ) : (
        <motion.img
          className="process-step4"
          src={Process4of4}
          alt=""
          onClick={handleClickProcess4Of4}
          variants={item}
          animate="hidden"
        />
      )}
    </div>
  );
};

export default Processbar;
