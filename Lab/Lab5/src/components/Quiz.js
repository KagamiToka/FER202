import React, { useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import { Button } from 'react-bootstrap';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleSelect = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleSubmit = () => {
    let result = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) result++;
    });
    setScore(result);
  };

  return (
    <div>
      <h2>Quiz Page</h2>
      {questions.map(q => (
        <Question key={q.id} data={q} onSelect={handleSelect} />
      ))}
      <Button variant="success" onClick={handleSubmit} className="mt-2">Submit</Button>
      {score !== null && <h4 className="mt-3">Your Score: {score}/{questions.length}</h4>}
    </div>
  );
}

export default Quiz;