import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* banner part */}
            <div>
                      <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '500px'}}
                src="https://img.freepik.com/free-photo/professional-camera-blurred-background-with-laptop_169016-10676.jpg?size=626&ext=jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h4>EKEN H9R 4K Wifi Waterproof Action Camera</h4>
                <p>Stream worldwide via Facebook and YouTube, share all your fun activities and extreme sports.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '500px'}}
                src="https://img.freepik.com/free-photo/flat-lay-camera-black-background-with-copy-space_23-2148363419.jpg?size=626&ext=jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h4>SJCAM SJ10 Pro 12MP</h4>
                <p>Bring home the SJCAM SJ10 Pro 12 Mega Pixels 4k Wi-Fi Waterproof Action Camera</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{height: '500px'}}
                src="https://img.freepik.com/free-photo/flat-lay-photography-concept-black-background_23-2148363432.jpg?size=626&ext=jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h4>Transcend DrivePro 230 Dash Camera</h4>
                <p>The Transcend DrivePro 230 Dashcam is designed with both style and safety in mind Even in low light</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>

            {/* products section */}
            <Products></Products>

            {/* about us section */}
            <section className='w-100 about-us-section'>
              <h2 style={{width:"80%",fontWeight:"bold"}} className='mx-auto mt-5 mb-3 pt-3'>ABOUT <span className='yellow-text'>US</span></h2>
              <div className='about-us-container d-flex mx-auto space-between pb-4'>
                <div className='ceo-img'>
                  <img className='w-75 mb-2' src="https://i.ibb.co/M7kX9K3/professional-man.jpg" alt="professional-man" border="1"></img>
                  <p>CEO</p>
                </div>
                <div className='ceo-speech'>
                  <p className='text-justify' style={{fontSize: '11px'}}>We created Cam Pavilion because we saw the need for a better way to buy and sell photography and videography equipment. Passionate about the craft ourselves, we dreamed of a more focused platform designed for industry professionals and hobbyists.</p>
                </div>
              </div>
            </section>

            {/* review section */}
            <ShowReviews></ShowReviews>
            
        </div>
    );
};

export default Home;