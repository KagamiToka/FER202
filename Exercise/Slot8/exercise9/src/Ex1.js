import React from 'react';
import { Card } from 'react-bootstrap';

function MyProfile() {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Body>
        <Card.Title>Full Name: Nguyễn Văn Nam</Card.Title>
        <Card.Subtitle>MSSV: DE180527</Card.Subtitle>
        <Card.Subtitle>Study at FPT University</Card.Subtitle>
        <Card.Text>
          Hello! I'm a software developer learning and creating projects with React-Bootstrap.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyProfile;
