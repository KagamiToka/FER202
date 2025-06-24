import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, Form, Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PizzaWebsite() {
  return (
    <div className='bg-dark'>
      {/* Header and Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image/download.jpg" 
            alt="Neapolitan Pizza"
            style={{ objectFit: 'cover', height: '300px' }}  
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image/cach-lam-banh-pizza.webp"
            alt="Pizza Slide 3"
            style={{ objectFit: 'cover', height: '300px' }}
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Menu Section */}
      <Container className="my-5">
        <h2 className="text-left text-white">Our Menu</h2>
        <Row className="g-4 justify-content-center">
          <Col md={3} className="d-flex">
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src="image/download (1).jpg" style={{ height: '200px', width: '250px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Margherita Pizza</Card.Title>
                <Card.Text>
                  <span style={{ textDecoration: 'line-through' }}>$40.00</span> $24.00
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src="image/download (2).jpg" style={{ height: '200px', width: '250px', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Mushroom Pizza</Card.Title>
                <Card.Text>$25.00</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src="image/download (3).jpg" style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Hawaiian Pizza</Card.Title>
                <Card.Text>$30.00</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src="image/download (4).jpg" style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
              <Card.Body>
                <Card.Title>Pesto Pizza</Card.Title>
                <Card.Text>
                  <span style={{ textDecoration: 'line-through' }}>$50.00</span> $30.00
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Book Your Table Section */}
      <Container id="contact" className="my-5">
        <h2 className="text-center text-white">Book Your Table</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Your Email *</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="service">
            <Form.Label>Select a Service</Form.Label>
            <Form.Control as="select">
              <option>Dining In</option>
              <option>Take Away</option>
              <option>Delivery</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Please write your comment" />
          </Form.Group>
          <Button variant="success" type="submit">Send Message</Button>
        </Form>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: '#fbd88b' }}>
        <small>© 2023 Pizza House. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default PizzaWebsite;
