import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      fetchData(); // Refresh list
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <Link to="/create" className="btn btn-primary mb-2">Tạo bài viết mới</Link>
      {data.map((post) => (
        <div key={post.id} className="border p-2 mb-2">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`} className="btn btn-warning me-2">Sửa</Link>
          <button onClick={() => handleDelete(post.id)} className="btn btn-danger">Xóa</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
