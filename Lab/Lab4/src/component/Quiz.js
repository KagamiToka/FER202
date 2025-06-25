import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from './QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = () => {
  const { userAnswers, setUserAnswers, resetQuiz } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // State for adding new question
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  // Load default questions
  useEffect(() => {
    const quizData = [
      {
        question: 'What is ReactJS?',
        answers: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database management system'
        ],
        correctAnswer: 'A JavaScript library for building user interfaces'
      },
      {
        question: 'What is JSX?',
        answers: [
          'A programming language',
          'A file format',
          'A syntax extension for JavaScript'
        ],
        correctAnswer: 'A syntax extension for JavaScript'
      }
    ];
    setQuestions(quizData);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedAnswer
    }));

    setSelectedAnswer('');

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    resetQuiz();
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setSelectedAnswer('');
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) total++;
    });
    return total;
  };

  // // Add new question
  const handleAddQuestion = () => {
    if (
      !newQuestion.trim() ||
      newAnswers.some((ans) => !ans.trim()) ||
      !newCorrectAnswer.trim()
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (!newAnswers.includes(newCorrectAnswer)) {
      alert('Correct answer must match one of the provided options.');
      return;
    }

    const newQ = {
      question: newQuestion,
      answers: newAnswers,
      correctAnswer: newCorrectAnswer
    };

    setQuestions((prev) => [...prev, newQ]);

    // Reset form
    setNewQuestion('');
    setNewAnswers(['', '', '']);
    setNewCorrectAnswer('');
  };

  // UI when completed
  if (showScore) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-danger mb-4">Quiz Completed!</h2>
        <p className="text-lg">Your score: {calculateScore()}</p>
        <button className="btn btn-primary mt-3" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Form to add question */}
      <div className="p-4 border rounded mb-4 bg-light">
        <h4 className="mb-3">Add New Question</h4>

        <input
          className="form-control mb-2"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />

        {newAnswers.map((ans, i) => (
          <input
            key={i}
            className="form-control mb-2"
            placeholder={`Answer ${i + 1}`}
            value={ans}
            onChange={(e) => {
              const updatedAnswers = [...newAnswers];
              updatedAnswers[i] = e.target.value;
              setNewAnswers(updatedAnswers);
            }}
          />
        ))}

        <input
          className="form-control mb-2"
          placeholder="Correct answer (must match one above)"
          value={newCorrectAnswer}
          onChange={(e) => setNewCorrectAnswer(e.target.value)}
        />

        <button className="btn btn-success" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>

      {/* Quiz question */}
      {currentQuestion && (
        <div className="p-4 border rounded">
          <h5 className="text-danger">Question {currentQuestionIndex + 1}</h5>
          <p className="fw-bold">{currentQuestion.question}</p>
          <div className="mb-3">
            {currentQuestion.answers.map((answer, i) => (
              <div key={i} className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => setSelectedAnswer(answer)}
                    className="form-check-input"
                  />
                  {answer}
                </label>
              </div>
            ))}
          </div>

          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
