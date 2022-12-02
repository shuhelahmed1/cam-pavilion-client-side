
import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ShowReviews.css';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://cam-pavilion-server-side.vercel.app/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <>
        {
            reviews.length === 0 ? 
            <div className='spinner-section'>
            <Spinner className='spinner' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div> : 

<div className='reviews-section'>
<h2 className='mx-auto mt-5 mb-3' style={{fontWeight: "bold"}}>CUSTOMER <span className='yellow-text'>REVIEWS</span></h2>
<Carousel>

<Carousel.Item>
    <img className='review-img' src={reviews[0]?.userPhoto} alt="userImage" />
<h5 style={{textAlign:'center'}}>{reviews[0]?.name}</h5>
<p style={{textAlign:'center'}}>{reviews[0]?.review}</p>
{
    reviews[0]?.rating == 1 && <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
</div> 
}
{
    reviews[0]?.rating == 2 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div> 
}
{
    reviews[0]?.rating == 3 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>
}
{
    reviews[0]?.rating == 4 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>
}
{
    reviews[0]?.rating == 5 && <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>
}

</Carousel.Item>

<Carousel.Item>
    <img className='review-img' src={reviews[1]?.userPhoto} alt="userImage" />
<h5 style={{textAlign:'center'}}>{reviews[1]?.name}</h5>
<p style={{textAlign:'center'}}>{reviews[1]?.review}</p>
{
    reviews[1]?.rating == 1 && <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
</div> 
}
{
    reviews[1]?.rating == 2 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div> 
}
{
    reviews[1]?.rating == 3 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>
}
{
    reviews[1]?.rating == 4 &&  <div style={{textAlign:'center'}}>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>
}
{
    reviews[1]?.rating == 5 && <div style={{textAlign:'center'}}>
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

        }
            
            
        </>
    );
};

export default ShowReviews;