import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    setEmailValid(email.includes("@") && email.includes("."));
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  const isFormValid = emailValid && passwordValid;

  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          isInvalid={emailTouched && !emailValid}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          isInvalid={passwordTouched && !passwordValid}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default EmailPasswordForm;
