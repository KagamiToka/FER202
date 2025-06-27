// components/UserValidationForm.js
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const UserValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    const age = parseInt(formData.age, 10);
    const phoneRegex = /^\d{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || formData.name.length < 3 || formData.name.length > 50)
      newErrors.name = "Tên phải từ 3 đến 50 ký tự.";
    if (!formData.age || isNaN(age) || age < 18 || age > 100)
      newErrors.age = "Tuổi phải từ 18 đến 100.";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Email không hợp lệ.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số.";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "Bạn phải đồng ý với điều khoản.";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(false);
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Form Xác Thực Người Dùng</h3>
      {showAlert && <Alert variant="danger">Vui lòng kiểm tra lại thông tin!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tên</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            label="Tôi đồng ý với điều khoản"
            isInvalid={!!errors.agreeToTerms}
          />
          <Form.Control.Feedback type="invalid">
            {errors.agreeToTerms}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

UserValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserValidationForm;
