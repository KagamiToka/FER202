import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Title component
function Title({ text }) {
  return <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>{text}</h5>;
}

// Description component
function Description({ text }) {
  return <h6 style={{paddingRight: '170px'}}>{text}</h6>;
}

// Image component
function Image({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt="Card"
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
  );
}

// SimpleCard component
function SimpleCard({ item }) {
  return (
    <Card style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Image imageUrl={item.imageUrl} />
      <Card.Body>
        <Title text={item.title} />
        <Description text={item.description} />
      </Card.Body>
    </Card>
  );
}

function Ex4() {
  const item = {
    title: 'Nguyễn Văn Nam - FPT UNIVERSITY ĐÀ NẴNG',
    description: 'Hí lô anh em',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/2560px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png',
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-sm" style={{ borderRadius: '10px' }}>
        <Card.Body>
          <Row className="align-items-center">
            {/* Logo bên trái */}
            <Col md={6}>
              <Image imageUrl={item.imageUrl} />
            </Col>

            {/* Thông tin bên phải */}
            <Col md={6} className="text-end">
              <Title text={item.title} />
              <Description text={item.description} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Ex4;
