import React from "react";
import MainMenu from "./components/MainMenu";
import {useSelector } from "react-redux";
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import "./App.css";

function App() {
  const gameStatus = useSelector((state) => state.Quiz.gameStatus);

  return (
    
      <div className="App">
        {gameStatus === "Menu" && <MainMenu />}
        {gameStatus === "Quiz" && <Quiz/>}
        {gameStatus === "EndScreen" && <EndScreen/>}

      </div>

  );
}

export default App;
