import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import QuizReview from './components/QuizReview';
import ReviewOverview from './components/ReviewOverview';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
        <Link className="navbar-brand" to="/">JavaScript Quiz</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Quiz</Link>
          <Link className="nav-link" to="/quiz/review">Quiz Review</Link>
          <Link className="nav-link" to="/quiz/result">Result</Link>
        </div>
      </nav>

      <div className="py-4">
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/quiz/review" element={<ReviewOverview />} />
          <Route path="/quiz/result" element={<QuizReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
