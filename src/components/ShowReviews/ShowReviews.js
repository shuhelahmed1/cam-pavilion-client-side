
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ShowReviews.css';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://morning-refuge-64241.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className='mx-auto mt-5 mb-3' style={{fontWeight: "bold",width:"80%"}}>CUSTOMER <span className='yellow-text'>REVIEWS</span></h2>
            <div className='reviews-section'>
            <Carousel>
  <Carousel.Item>
    <h5>{reviews[0]?.name}</h5>
    <p className='text-center'>{reviews[0]?.review}</p>
            {
                reviews[0]?.rating == 1 && <div>
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                reviews[0]?.rating == 2 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                reviews[0]?.rating == 3 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                reviews[0]?.rating == 4 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                reviews[0]?.rating == 5 && <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
 
  
  </Carousel.Item>
  <Carousel.Item>
    <h5>{reviews[1]?.name}</h5>
    <p className='text-center'>{reviews[1]?.review}</p>
    {
                reviews[1]?.rating == 1 && <div>
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                reviews[1]?.rating == 2 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                reviews[1]?.rating == 3 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                reviews[1]?.rating == 4 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                reviews[1]?.rating == 5 && <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
  </Carousel.Item>
  
</Carousel>
            </div>
        </div>
    );
};

export default ShowReviews;