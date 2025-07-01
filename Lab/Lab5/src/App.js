import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';
import Quiz from './components/Quiz';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;