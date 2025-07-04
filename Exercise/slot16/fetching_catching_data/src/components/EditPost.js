import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/posts/${id}`, { title, content });
    navigate("/posts");
  };

  return (
    <div>
      <h2>Chỉnh sửa bài viết</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea><br /><br />
        <button type="submit" className="btn btn-success">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditPost;
