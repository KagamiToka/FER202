import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Post from './component/Post';
import PostDetail from './component/PostDetail';
import Login from './component/Login';

function App() {
  return (
    <div>
      <h1>React Router Example 1</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          {/* Ví dụ 3 */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}
export default App;
