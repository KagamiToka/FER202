import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ex5() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <div className="text-center py-4" style={{ backgroundColor: '#f28c28' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/2560px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
          alt="FPT University" 
          style={{ 
            maxWidth: '600px', 
            padding: '10px',  // Thêm khoảng cách xung quanh logo
            backgroundColor: 'white',  // Màu nền trắng
            borderRadius: '10px',  // Bo góc cho khung
            border: '3px solid #f28c28'  // Đường viền màu cam
          }} 
        />
      </div>

      {/* Navigation */}
      <Navbar variant="light" className="justify-content-center" style={{backgroundColor: '#f28c28'}}>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Container className="my-5 text-center" style={{ flex: 1 }}>
        <Row>
          <Col>
            <h4 id="about">About</h4>
            <p>This is the about section of the website.</p>

            <h4 id="contact">Contact</h4>
            <p>For any inquiries, please contact us at example@example.com.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: '#fbd88b' }}>
        <small>© 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Ex5;
