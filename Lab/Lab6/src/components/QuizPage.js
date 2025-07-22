import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAnswer, nextQuestion, prevQuestion, firstQuestion, lastQuestion, submitQuiz
} from '../features/quiz/quizSlice';

export default function QuizPage() {
  const dispatch = useDispatch();
  const { questions, currentIndex } = useSelector(state => state.quiz);
  const current = questions[currentIndex];

  return (
    <div className="container">
      <h2>Q.{currentIndex + 1} {current.question}</h2>
      <div className="row">
        {current.options.map(opt => (
          <div key={opt} className="col-md-6">
            <label className="form-control bg-light">
              <input
                type="radio"
                name={`q-${current.id}`}
                checked={current.selected === opt}
                onChange={() => dispatch(selectAnswer({ id: current.id, answer: opt }))}
              /> {opt}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button onClick={() => dispatch(firstQuestion())} className="btn btn-outline-primary">First</button>{' '}
        <button onClick={() => dispatch(prevQuestion())} className="btn btn-outline-primary">Prev</button>{' '}
        <button onClick={() => dispatch(nextQuestion())} className="btn btn-outline-primary">Next</button>{' '}
        <button onClick={() => dispatch(lastQuestion())} className="btn btn-outline-primary">Last</button>{' '}
        <button onClick={() => dispatch(submitQuiz())} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
