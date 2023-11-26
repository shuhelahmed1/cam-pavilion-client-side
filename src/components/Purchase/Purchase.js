import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import './Purchase.css';
const Purchase = () => {
    const [purchase,setPurchase] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://cam-pavilion.vercel.app/products/${id}`)
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[id])
    
    
    return (
        <>
        <h2 className='text-center mt-3'>Purchase Here</h2>
        <div className='purchase-section row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='col d-flex'>
                <div>
                    <img className='w-75' src={purchase.imgUrl} alt="" />
                </div>
                <div>
                <h4>{purchase.name}</h4>
                <p>{purchase.des}</p>
                </div>
            </div>
            <div className='col'>
            <PurchaseForm purchase={purchase}></PurchaseForm>
            </div>
        </div>
        
        </>
    );
};

export default Purchase;