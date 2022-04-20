import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    
    const [purchase,setPurchase] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://morning-refuge-64241.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[id])
    
    
    return (
        <>
        <h2 className='text-center mt-3'>Detailed Information</h2>
        <div className='w-75 mx-auto border p-3 mb-3'>
            <img className='w-25' src={purchase.imgUrl} alt="" />
            <h4>{purchase.name}</h4>
            <p>{purchase.des}</p>
            <Link to='/products/purchase/placeorder'>Place Order</Link>
        </div>
        </>
    );
};

export default Purchase;