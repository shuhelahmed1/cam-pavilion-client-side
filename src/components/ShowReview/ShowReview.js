import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ShowReview = ({review}) => {
    return (
        <div className='text-center border border-1 p-2 rounded'>
            <h6>Name: {review.name}</h6>
            <h6>Review: {review.review}</h6>
            {
                review.rating == 1 && <div>
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                review.rating == 2 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div> 
            }
            {
                review.rating == 3 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                review.rating == 4 &&  <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
            {
                review.rating == 5 && <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            }
        </div>
    );
};

export default ShowReview;