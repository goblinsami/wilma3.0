import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Carousel, Caption, Item } from 'react-bootstrap';
import './MainCarousel.css';

function MainCarousel({
  mg1,
  mg2,
  mg3,
  lightBg

}) {

  return (
  <div className={lightBg ? 'box pt-5 pb-5' : 'box pt-5 pb-5 darkBg'}>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mg1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mg2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
);
}

export default MainCarousel;