import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { newLists } from '../data/newsData';

function News() {
  return (
    <div>
      <h2 className="text-danger mb-4">News Category</h2>
      <Row>
        {newLists.map(news => (
          <Col key={news.id} md={3} className="mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={news.images} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{news.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>{news.description}</Card.Text>
                <a href="#" className="small">{news.title}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;