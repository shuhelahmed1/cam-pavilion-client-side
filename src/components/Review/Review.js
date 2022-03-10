import React, { useRef } from 'react';
import useAuth from '../../hook/useAuth';

const Review = () => {
    const {user} = useAuth();
    const reviewRef = useRef();
    const nameRef = useRef();
    const addReview = e =>{
        e.preventDefault();
        const review = reviewRef.current.value;
        const name = nameRef.current.value;
        const newReview = {review, name};
        fetch('https://morning-refuge-64241.herokuapp.com/review',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res=>res.json())
        .then(result=>{
            alert('Successfully review added')
            e.target.reset();
        })

    }
    return (
        <div>
            <div className='w-75 mx-auto mt-5'>
                <h2>Please provide a review: </h2>
                <form onSubmit={addReview}>
                <input className='d-block w-100' type="text" value={user.displayName} ref={nameRef}/>
                <textarea className='d-block w-100 my-2' type="text" ref={reviewRef} placeholder='Your comment'/>
                <input className='bg-warning' type="submit" value="Submit" />
                    </form>
            </div>
        </div>
    );
};

export default Review;