import Process1of4 from "../assets/Svgs/Process1of4.svg";
import Process1of4Pressed from "../assets/Svgs/Process1of4Pressed.svg";

import Process2of4 from "../assets/Svgs/Process2of4.svg";
import Process2of4Pressed from "../assets/Svgs/Process2of4Pressed.svg";

import Process3of4 from "../assets/Svgs/Process3of4.svg";
import Process3of4Pressed from "../assets/Svgs/Process3of4Pressed.svg";

import Process4of4 from "../assets/Svgs/Process4of4.svg";
import Process4of4Pressed from "../assets/Svgs/Process4of4Pressed.svg";

import { useState } from "react";


const Processbar = () => {
    // const [game, setGame] = useState("start");

  const [process1, setProcess1] = useState(false);
  const [process2, setProcess2] = useState(false);
  const [process3, setProcess3] = useState(false);
  const [process4, setProcess4] = useState(false);

//    const handleClick = (gameState) => {
//      setGame(gameState);
//    };
const handleClickProcess1Of4 = () => {
  process1 ? setProcess1(false) : setProcess1(true);
  process2 ? setProcess2(false) : setProcess2(false);
  process3 ? setProcess3(false) : setProcess3(false);
   process4 ? setProcess4(false) : setProcess4(false);
//    setGame("start");
};
const handleClickProces21Of4 = () => {
  process2 ? setProcess2(false) : setProcess2(true);

  process1 ? setProcess1(false) : setProcess1(false);
   process3 ? setProcess3(false) : setProcess3(false);
   process4 ? setProcess4(false) : setProcess4(false);
//    setGame("playing");
};
const handleClickProces3Of4 = () => {
  process3 ? setProcess3(false) : setProcess3(true);
   process1 ? setProcess1(false) : setProcess1(false);
   process2 ? setProcess2(false) : setProcess2(false);
   process4 ? setProcess4(false) : setProcess4(false);
//  setGame("lost");
};
const handleClickProcess4Of4 = () => {
  process4 ? setProcess4(false) : setProcess4(true);
  process1 ? setProcess1(false) : setProcess1(false);
  process2 ? setProcess2(false) : setProcess2(false);
     process3 ? setProcess3(false) : setProcess3(false);
    //   setGame("won");
 
};
  return (
    <div>
      {process1 ? (
        <img
          className="process-step1"
          src={Process1of4Pressed}
          alt=""
          onClick={handleClickProcess1Of4}
        />
      ) : (
        <img
          className="process-step1"
          src={Process1of4}
          alt=""
          onClick={handleClickProcess1Of4}
        />
      )}

      {process2 ? (
        <img
          className="process-step2"
          src={Process2of4Pressed}
          alt=""
          onClick={handleClickProces21Of4}
        />
      ) : (
        <img
          className="process-step2"
          src={Process2of4}
          alt=""
          onClick={handleClickProces21Of4}
        />
      )}

      {process3 ? (
        <img
          className="process-step3"
          src={Process3of4Pressed}
          alt=""
          onClick={handleClickProces3Of4}
        />
      ) : (
        <img
          className="process-step3"
          src={Process3of4}
          alt=""
          onClick={handleClickProces3Of4}
        />
      )}
      {process4 ? (
        <img
          className="process-step4"
          src={Process4of4Pressed}
          alt=""
          onClick={handleClickProcess4Of4}
        />
      ) : (
        <img
          className="process-step4"
          src={Process4of4}
          alt=""
          onClick={handleClickProcess4Of4}
        />
      )}
    </div>
  );
};

export default Processbar;
