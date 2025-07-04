import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setStatus("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    try {
      // Gọi API để lấy danh sách useraccounts
      const response = await axios.get("http://localhost:3001/useraccounts");
      const users = response.data;

      // Kiểm tra username & password
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setStatus(`Login successfully with username: ${foundUser.username}`);
        setTimeout(() => navigate("/posts"), 1000);
      } else {
        setStatus("Sai tên đăng nhập hoặc mật khẩu.");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      setStatus("Lỗi kết nối đến server.");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Đăng nhập</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Login;
