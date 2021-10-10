import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [game, setGame] = useState("");
  const [process1, setProcess1] = useState(false);
  const [process2, setProcess2] = useState(false);
  const [process3, setProcess3] = useState(false);
  const [process4, setProcess4] = useState(false);
  const handleClick = (gameState) => {
    setGame(gameState);
  };
  const handleClickProcess1Of4 = () => {
    process1 ? setProcess1(false) : setProcess1(true);
    process2 ? setProcess2(false) : setProcess2(false);
    process3 ? setProcess3(false) : setProcess3(false);
    process4 ? setProcess4(false) : setProcess4(false);
    setGame("start");
  };
  const handleClickProces21Of4 = () => {
    process2 ? setProcess2(false) : setProcess2(true);

    process1 ? setProcess1(false) : setProcess1(false);
    process3 ? setProcess3(false) : setProcess3(false);
    process4 ? setProcess4(false) : setProcess4(false);
    setGame("playing");
  };
  const handleClickProces3Of4 = () => {
    process3 ? setProcess3(false) : setProcess3(true);
    process1 ? setProcess1(false) : setProcess1(false);
    process2 ? setProcess2(false) : setProcess2(false);
    process4 ? setProcess4(false) : setProcess4(false);
    setGame("lost");
  };
  const handleClickProcess4Of4 = () => {
    process4 ? setProcess4(false) : setProcess4(true);
    process1 ? setProcess1(false) : setProcess1(false);
    process2 ? setProcess2(false) : setProcess2(false);
    process3 ? setProcess3(false) : setProcess3(false);
    setGame("won");
  };
  const value = {
    game,
    setGame,
    process1,
    process2,
    process3,
    process4,
    handleClick,
    handleClickProcess1Of4,
    handleClickProces21Of4,
    handleClickProces3Of4,
    handleClickProcess4Of4,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;