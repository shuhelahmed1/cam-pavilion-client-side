import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';
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
            <div className='reviews-section d-grid mx-auto mb-2'>
            {
                reviews.slice(0,4).map(review=> <ShowReview key={review._id} review={review}></ShowReview>)
            }
            </div>
        </div>
    );
};

export default ShowReviews;