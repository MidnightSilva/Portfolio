import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {



  //about me
  const [game, setGame] = useState("");
  const [process1, setProcess1] = useState(false);
  const [process2, setProcess2] = useState(false);
  const [process3, setProcess3] = useState(false);
  const [process4, setProcess4] = useState(false);


//message
 const [message, setMessage] = useState(false);

 const handleMessageModal =() =>{

  message? setMessage(true) : setMessage(false)
 }
  
  const handleClick = (gameState) => {
    setGame(gameState);
  };
  const handleClickProcess1Of4 = () => {
    process1 ? setProcess1(false) : setProcess1(true);
    process2 ? setProcess2(false) : setProcess2(false);
    process3 ? setProcess3(false) : setProcess3(false);
    process4 ? setProcess4(false) : setProcess4(false);

    if(game ==="start"){
      setGame(""); 
    } else 
    setGame("start"); 

  };
  const handleClickProces21Of4 = () => {
    process2 ? setProcess2(false) : setProcess2(true);

    process1 ? setProcess1(false) : setProcess1(false);
    process3 ? setProcess3(false) : setProcess3(false);
    process4 ? setProcess4(false) : setProcess4(false);
   
        if (game === "playing") {
          setGame("");
        } else setGame("playing"); 
  };
  const handleClickProces3Of4 = () => {
    process3 ? setProcess3(false) : setProcess3(true);
    process1 ? setProcess1(false) : setProcess1(false);
    process2 ? setProcess2(false) : setProcess2(false);
    process4 ? setProcess4(false) : setProcess4(false);
    
       if (game === "lost") {
         setGame("");
       } else setGame("lost"); 
  };
  const handleClickProcess4Of4 = () => {
    process4 ? setProcess4(false) : setProcess4(true);
    process1 ? setProcess1(false) : setProcess1(false);
    process2 ? setProcess2(false) : setProcess2(false);
    process3 ? setProcess3(false) : setProcess3(false);
   
     if (game === "won") {
       setGame("");
     } else setGame("won"); 
    
  };


  // contact me messager 

  const value = {
    handleMessageModal,
    message, 
    setMessage,
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