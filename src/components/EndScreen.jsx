import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGameStatus, resetScore } from "../store";
export default function EndScreen() {
  const score = useSelector((state) => state.Quiz.score);
  const dispatch = useDispatch();
  const restartQuiz = () => {
    dispatch(updateGameStatus("Menu"));
    dispatch(resetScore());
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1>
        Your Score : {score} 
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}
