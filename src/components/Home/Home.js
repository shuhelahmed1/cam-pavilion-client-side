import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            {/* banner part */}
            <div>
                      <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '360px'}}
                src="https://img.freepik.com/free-photo/professional-camera-blurred-background-with-laptop_169016-10676.jpg?size=626&ext=jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '360px'}}
                src="https://img.freepik.com/free-photo/flat-lay-camera-black-background-with-copy-space_23-2148363419.jpg?size=626&ext=jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '360px'}}
                src="https://img.freepik.com/free-photo/flat-lay-photography-concept-black-background_23-2148363432.jpg?size=626&ext=jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>

            {/* products section */}
            <Products></Products>

            {/* review section */}
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default Home;