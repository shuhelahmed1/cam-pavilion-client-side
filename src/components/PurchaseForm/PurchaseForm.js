import React, { useRef } from 'react';
import useAuth from '../../hook/useAuth';

const PurchaseForm = ({purchase}) => {
    // const idRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const {user} = useAuth();
    const hanndlePurchase = e =>{
        e.preventDefault();
        // const id = idRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const newOrder = {name,email,address,phone}
        fetch('https://morning-refuge-64241.herokuapp.com/orders',{
            method:"POST",
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newOrder)
            })
            .then(res=>res.json)
            .then(data=>{
                alert('Successfully place the order');
                e.target.reset();
        })
    }
    return (
        <div className='w-75 mx-auto my-3'>
            <h5 className='text-center mt-4'>Please Provide Your Information</h5>
            <form className='cam-pavilion-form' onSubmit={hanndlePurchase}>
                <p>Name: <input className='w-100' type="text" ref={nameRef} readOnly value={user.displayName}/></p>
                <p>Email: <input readOnly className='w-100' type="email" ref={emailRef} value={user.email}/></p>
                <p>Address: <input className='w-100' ref={addressRef} type="text"/></p>
                <p>Phone: <input className='w-100' ref={phoneRef} type="number" /></p>
                <p>Product <input defaultValue={purchase.name} className='w-100' type="text" readOnly/></p>
                <button className='common-button' type="submit">Purchase</button>
            </form>
        </div>
    );
};

export default PurchaseForm;