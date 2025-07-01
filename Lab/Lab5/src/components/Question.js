import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Question({ data, onSelect }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{data.question}</Card.Title>
        {data.options.map((opt, idx) => (
          <Form.Check
            key={idx}
            type="radio"
            label={opt}
            name={`q${data.id}`}
            onChange={() => onSelect(data.id, opt)}
          />
        ))}
      </Card.Body>
    </Card>
  );
}

export default Question;