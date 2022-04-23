import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
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
        <h2 className='text-center mt-3'>Purchase Here</h2>
        <div style={{width: '90%'}} className='d-flex mx-auto border p-3 mb-3'>
            <div style={{width: '50%'}} className='d-flex'>
                <div>
                    <img className='w-75' src={purchase.imgUrl} alt="" />
                </div>
                <div>
                <h4>{purchase.name}</h4>
                <p>{purchase.des}</p>
                </div>
            </div>
            <div style={{width: '50%'}}>
            <PurchaseForm purchase={purchase}></PurchaseForm>
            </div>
            
        </div>
        
        </>
    );
};

export default Purchase;