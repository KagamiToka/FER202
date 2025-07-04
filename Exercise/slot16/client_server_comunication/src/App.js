import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API posts
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    // Gọi API useraccounts
    fetch('http://localhost:3001/useraccounts')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{border: '1px solid #ccc', padding: '8px', margin: '8px'}}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}

      <h1>User Accounts</h1>
      {users.map(user => (
        <div key={user.id} style={{border: '1px solid #ccc', padding: '8px', margin: '8px'}}>
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={user.username} width="100" />
        </div>
      ))}
    </div>
  );
}

export default App;
