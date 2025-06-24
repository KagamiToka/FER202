import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState({});

  const resetQuiz = () => {
    setUserAnswers({});
  };

  return (
    <QuizContext.Provider value={{ userAnswers, setUserAnswers, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};