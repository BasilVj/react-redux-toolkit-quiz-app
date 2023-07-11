import React from "react";
import { Questions } from "../Questions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGameStatus, updateScore } from "../store";

export default function Quiz() {

  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");

  const checkAnswer = () => {
    if (selectedAns === Questions[currentQuestion].asnwer) {
      setCurrentQuestion(currentQuestion + 1);
    
      dispatch(updateScore());
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const finishQuiz = () => {
    if (selectedAns === Questions[currentQuestion].asnwer) {
      dispatch(updateScore());
      dispatch(updateGameStatus('EndScreen'))
    } else {
      dispatch(updateGameStatus('EndScreen'))
    }
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button onClick={() => setSelectedAns("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setSelectedAns("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setSelectedAns("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setSelectedAns("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      <div>
        {currentQuestion === Questions.length - 1 ? (
          <button
            onClick={finishQuiz}
            id="nextQuestion"
            style={{ backgroundColor: "blue" }}
          >
            Finish
          </button>
        ) : (
          <button onClick={checkAnswer} id="nextQuestion">
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
