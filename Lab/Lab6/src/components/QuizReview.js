import React from 'react';
import { useSelector } from 'react-redux';

export default function QuizReview() {
  const { questions } = useSelector(state => state.quiz);

  return (
    <div className="container">
      <h2 className="mb-4">Quiz Review</h2>
      {questions.map((q, index) => {
        const isCorrect = q.selected === q.correct;
        return (
          <div key={q.id} className={`p-3 mb-3 rounded ${isCorrect ? 'bg-success-subtle' : 'bg-danger-subtle'}`}>
            <h5>
              Q{index + 1}. {q.question}
            </h5>
            <ul className="list-unstyled">
              {q.options.map(opt => (
                <li key={opt}>
                  <input type="radio" checked={q.selected === opt} readOnly />{' '}
                  {opt}
                </li>
              ))}
            </ul>
            <p className="text-muted">
              Right answer is: <strong>{q.correct}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
}
