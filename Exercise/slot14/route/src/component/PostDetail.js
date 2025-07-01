// import React from 'react';
// import { useParams } from 'react-router-dom';

// function PostDetail() {
//   const { id } = useParams();
//   return (
//     <div>
//       <h2>Post Detail for Post ID: {id}</h2>
//       <p>This is the detailed information for post {id}.</p>
//     </div>
//   );
// }
// export default PostDetail;


// Ví dụ 3
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function PostDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch('/posts.json')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(p => p.id === id);
//         setPost(found);
//       });
//   }, [id]);

//   if (!post) return <h2>Post not found</h2>;

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//     </div>
//   );
// }
// export default PostDetail;

// ví dụ 4
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then(data => setPost(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
