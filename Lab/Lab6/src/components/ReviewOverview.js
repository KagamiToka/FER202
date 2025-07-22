import React from 'react';
import { useSelector } from 'react-redux';

export default function ReviewOverview() {
  const { questions } = useSelector(state => state.quiz);

  return (
    <div className="container">
      <h2 className="mb-4">Quiz Review</h2>
      <div className="d-flex flex-wrap gap-2">
        {questions.map((q, i) => (
          <div
            key={q.id}
            className="bg-success-subtle border rounded p-3 text-center"
            style={{ width: "150px" }}
          >
            <strong>Question No {i + 1}</strong>
            <p>{q.selected ? "Answered" : "Not Answered"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
