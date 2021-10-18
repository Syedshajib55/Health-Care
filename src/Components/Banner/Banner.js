import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from './beautiful-girl-sitting-dentist-s-office.jpg'
import slider2 from './child-eye-test-eye-exam-little-girl-having-eye-check-up-with-phoropter-doctor-performs-eye-test-child.jpg'
import slider3 from './5757473.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel className="carousel">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider1}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider2}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider3}
                      alt="First slide"
                  />
              </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Banner;