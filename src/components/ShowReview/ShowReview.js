import React from 'react';

const ShowReview = ({review}) => {
    return (
        <div className='text-center border border-1 p-2 rounded'>
            <h6>{review.name}</h6>
            <p>{review.review}</p>
        </div>
    );
};

export default ShowReview;