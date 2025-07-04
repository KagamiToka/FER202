import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/posts", { title, content });
    navigate("/posts");
  };

  return (
    <div>
      <h2>Tạo bài viết mới</h2>
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
        <button type="submit" className="btn btn-success">Tạo</button>
      </form>
    </div>
  );
};

export default CreatePost;
