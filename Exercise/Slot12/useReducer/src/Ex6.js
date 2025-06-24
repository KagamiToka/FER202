import React, { useEffect, useReducer } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const quizInitial = {
  questions: [
    {
      id: 1,
      question: "Capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra"
    },
    {
      id: 2,
      question: "Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      id: 3,
      question: "Largest ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    }
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timer: 10,
  highScore: localStorage.getItem("highScore") || 0
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const selected = action.payload;
      const correct = state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: selected,
        feedback: selected === correct ? "correct" : "incorrect"
      };
    case "NEXT_QUESTION":
      const correctAns = state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = correctAns ? state.score + 1 : state.score;
      const finished = state.currentQuestion + 1 === state.questions.length;
      const newHigh = Math.max(newScore, state.highScore);
      if (finished) localStorage.setItem("highScore", newHigh);
      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        showScore: finished,
        timer: 10,
        highScore: newHigh
      };
    case "TICK":
      return { ...state, timer: state.timer - 1 };
    case "RESTART":
      return { ...quizInitial, highScore: state.highScore };
    default:
      return state;
  }
}

export default function QuestionBankEnhanced() {
  const [state, dispatch] = useReducer(quizReducer, quizInitial);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timer, highScore } = state;

  useEffect(() => {
    if (showScore) return;
    if (timer === 0) {
      dispatch({ type: "NEXT_QUESTION" });
    }
    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [timer, showScore]);

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Score: {score}/{questions.length}</h2>
          <h3>High Score: {highScore}</h3>
          <button onClick={() => dispatch({ type: "RESTART" })}>Restart</button>
        </div>
      ) : (
        <div>
          <h4>Question {currentQuestion + 1}/{questions.length}</h4>
          <p>{questions[currentQuestion].question}</p>
          <p style={{ color: timer < 5 ? 'red' : 'black' }}>⏱️ {timer}s</p>
          {questions[currentQuestion].options.map(option => (
            <button key={option} onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}>
              {option}
            </button>
          ))}

          {feedback === "correct" && <p><FaCheckCircle color="green" /> Correct! 🎉</p>}
          {feedback === "incorrect" && <p><FaTimesCircle color="red" /> Incorrect! Answer: {questions[currentQuestion].answer}</p>}

          <button onClick={() => dispatch({ type: "NEXT_QUESTION" })} disabled={!selectedOption}>
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}
