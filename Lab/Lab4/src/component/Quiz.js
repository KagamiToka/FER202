import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from './QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = () => {
  const { userAnswers, setUserAnswers, resetQuiz } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

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
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: selectedAnswer
    }));
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
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

  if (showScore) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Quiz Completed!</h2>
        <p className="text-lg">Your score: {calculateScore()}</p>
        <button
          className="mt-4 bg-blue text-black px-4 py-2 rounded"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-red-600">Question {currentQuestionIndex + 1}</h2>
      <p className="text-lg font-semibold">{currentQuestion.question}</p>
      <div className="border rounded-md p-2">
        {currentQuestion.answers.map((answer, i) => (
          <div key={i} className="mb-1">
            <label className="inline-flex items-center gap-2 w-full">
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => setSelectedAnswer(answer)}
              />
              <span>{answer}</span>
            </label>
          </div>
        ))}
      </div>
      <button
        className="bg-red text-blue px-4 py-1 rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;