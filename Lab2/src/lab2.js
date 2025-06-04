import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Lab2() {
  return (
    <Container className='bg-dark'>
      {/* Hero Section */}
      <Row className="my-5">
        <Col>
          <div className="hero-section" style={{ backgroundImage: 'url(image/download.jpg)', height: '300px', backgroundSize: 'cover' }}>
            <div className="hero-content text-center text-white">
              <h1>Neapolitan Pizza</h1>
              <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Menu Section */}
      <Row className="my-5">
        <Col>
          <h2>Our Menu</h2>
        </Col>
      </Row>
      
      <Row className="my-4">
        {/* Pizza Card 1 */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="image/download (1).jpg" />
            <Card.Body>
              <Card.Title>Margherita Pizza</Card.Title>
              <Card.Text>$24.00 <span className="badge bg-danger">SALE</span></Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Pizza Card 2 */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="image/download (2).jpg" />
            <Card.Body>
              <Card.Title>Mushroom Pizza</Card.Title>
              <Card.Text>$25.00</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Pizza Card 3 */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="image/download (3).jpg" />
            <Card.Body>
              <Card.Title>Hawaiian Pizza</Card.Title>
              <Card.Text>$30.00 <span className="badge bg-success">NEW</span></Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Pizza Card 4 */}
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="image/download (4).jpg" />
            <Card.Body>
              <Card.Title>Pesto Pizza</Card.Title>
              <Card.Text>$16.00 <span className="badge bg-danger">SALE</span></Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Book Your Table Section */}
      <Row className="my-5">
        <Col>
          <h2>Book Your Table</h2>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formService">
              <Form.Label>Select a Service</Form.Label>
              <Form.Control as="select">
                <option>Dining In</option>
                <option>Takeaway</option>
                <option>Delivery</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formComment">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Please write your comment" />
            </Form.Group>

            <Button variant="success" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Lab2;
