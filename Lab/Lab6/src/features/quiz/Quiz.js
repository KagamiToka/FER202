// src/features/quiz/Quiz.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, toggleResult, resetQuiz } from './quizSlice';

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, showResult } = useSelector(state => state.quiz);

  const handleSelect = (questionId, option) => {
    dispatch(selectAnswer({ questionId, option }));
  };

  const handleSubmit = () => {
    dispatch(toggleResult());
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      {questions.map(q => (
        <div key={q.id}>
          <h3>{q.text}</h3>
          <ul>
            {q.options.map(opt => (
              <li
                key={opt}
                style={{
                  cursor: 'pointer',
                  fontWeight: q.selected === opt ? 'bold' : 'normal',
                  color:
                    showResult && opt === q.correct
                      ? 'green'
                      : showResult && opt === q.selected
                      ? 'red'
                      : 'black',
                }}
                onClick={() => handleSelect(q.id, opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {!showResult ? (
        <button onClick={handleSubmit}>Submit Answers</button>
      ) : (
        <div>
          <h2>Result</h2>
          {questions.map(q => (
            <p key={q.id}>
              {q.text} -{' '}
              {q.selected === q.correct ? 'Correct ✅' : 'Incorrect ❌'}
            </p>
          ))}
          <button onClick={handleReset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
