import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function FullForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [career, setCareer] = useState("");
  const [agree, setAgree] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isValid = name.trim().length >= 2 && gender && career && agree;
    setFormValid(isValid);
  }, [name, gender, career, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (formValid) {
      alert("Gửi thành công!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Họ tên */}
      <Form.Group controlId="formName">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={submitted && name.trim().length < 2}
        />
        <Form.Control.Feedback type="invalid">
          Tên phải có ít nhất 2 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Giới tính */}
      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label><br />
        <Form.Check
          inline
          type="radio"
          label="Nam"
          name="gender"
          onChange={() => setGender("male")}
          checked={gender === "male"}
        />
        <Form.Check
          inline
          type="radio"
          label="Nữ"
          name="gender"
          onChange={() => setGender("female")}
          checked={gender === "female"}
        />
        {submitted && !gender && (
          <div style={{ color: "red", fontSize: "0.9em" }}>Vui lòng chọn giới tính</div>
        )}
      </Form.Group>

      {/* Ngành nghề */}
      <Form.Group className="mt-3" controlId="formCareer">
        <Form.Label>Ngành nghề</Form.Label>
        <Form.Select
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          isInvalid={submitted && !career}
        >
          <option value="">-- Chọn ngành nghề --</option>
          <option value="it">CNTT</option>
          <option value="marketing">Marketing</option>
          <option value="design">Thiết kế</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Vui lòng chọn ngành nghề.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Checkbox điều khoản */}
      <Form.Group className="mt-3" controlId="formAgree">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          isInvalid={submitted && !agree}
        />
        {submitted && !agree && (
          <div style={{ color: "red", fontSize: "0.9em" }}>Bạn phải đồng ý với điều khoản</div>
        )}
      </Form.Group>

      {/* Nút Gửi */}
      <Button className="mt-3" type="submit" disabled={!formValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default FullForm;
