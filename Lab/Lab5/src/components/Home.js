import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/image/maxresdefault.jpg" alt="Slide 1" />
          <Carousel.Caption>
            <h3>Slide 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image/maxresdefault (1).jpg" alt="Slide 2" />
          <Carousel.Caption>
            <h3>Slide 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;