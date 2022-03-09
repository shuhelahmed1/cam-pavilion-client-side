import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Purchase = () => {
    const {user} = useFirebase();
    const [purchase,setPurchase] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[])
    return (
        <>
        <h2 className='text-center mt-3'>DETAILED INFORMATION</h2>
        <div className='w-50 mx-auto border p-3'>
            <img className='w-50' src={purchase.imgUrl} alt="" />
            <h4>{purchase.name}</h4>
            <p>{purchase.des}</p>
            <form>
                <h5 className='text-center mt-3'>Please Provide Your Information</h5>
                <hr />
                <p>Product Id: <input className='w-100' type="text" value={purchase._id}/></p>
                <p>Name: <input className='w-100' type="text" value={user.displayName}/></p>
                <p>Email: <input className='w-100' type="email" value={user.email}/></p>
                <p>Address: <input className='w-100' type="email"/></p>
                <p>Phone: <input className='w-100' type="email" /></p>
                <input type="submit" value='purchase'/>
            </form>
        </div>
        </>
    );
};

export default Purchase;