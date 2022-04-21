import React, { useRef, useState } from 'react';
import useAuth from '../../hook/useAuth';
import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const reviewRef = useRef();
    const nameRef = useRef();
    const ratingRef = useRef();
    const [error, setError] = useState('')
    const addReview = e =>{
        e.preventDefault();
        const review = reviewRef.current.value;
        const name = nameRef.current.value;
        const rating = ratingRef.current.value;
        if(rating>5 || rating <= 0){
            setError('Please provide rating between 1-5')
            return;
        }
        const newReview = {review, name, rating};
        fetch('https://morning-refuge-64241.herokuapp.com/review',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res=>res.json())
        .then(result=>{
            setError('')
            alert('Successfully review added')
            e.target.reset();
        })

    }
    return (
        <div>
            <div className='w-75 mx-auto mt-5'>
                <h2 style={{fontWeight: 'bold'}}>Please Provide a Review </h2>
                <form className='cam-pavilion-form' onSubmit={addReview}>
                <input className='d-block w-100' type="text" value={user.displayName} ref={nameRef}/>
                <textarea required className='d-block w-100 my-2' type="text" ref={reviewRef} placeholder='Your comment'/>
                <input className='d-block w-100 mb-2' type="number" ref={ratingRef} placeholder='Your rating (1-5)'/>
                <button className='common-button' type="submit">Submit</button>
                </form>
                <h5 className='text-danger'>{error}</h5>
            </div>
        </div>
    );
};

export default Review;