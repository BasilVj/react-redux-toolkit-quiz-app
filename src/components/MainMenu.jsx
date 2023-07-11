import React from "react";
import {useDispatch} from "react-redux";
import {updateGameStatus} from '../store'

export default function MainMenu() {
  const dispatch = useDispatch()
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input type="text" placeholder="Ex. John Smith" />
      <button onClick={()=>dispatch(updateGameStatus('Quiz'))}>Start Quiz</button>
    </div>
  );
}
