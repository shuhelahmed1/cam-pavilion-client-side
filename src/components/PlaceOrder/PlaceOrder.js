import React, { useRef } from 'react';
import useFirebase from '../../hook/useFirebase';

const PlaceOrder = () => {
    // const idRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const {user} = useFirebase();
    const hanndlePurchase = e =>{
        e.preventDefault();
        // const id = idRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const newOrder = {name,email,address,phone}
        fetch('http://localhost:5000/orders',{
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
        <div className='w-75 mx-auto'>
            <form onSubmit={hanndlePurchase}>
                <h5 className='text-center mt-3'>Please Provide Your Information</h5>
                <hr />
                {/* <p>Product Id: <input className='w-100' type="text" ref={idRef} value={purchase._id}/></p> */}
                <p>Name: <input className='w-100' type="text" ref={nameRef} value={user.name}/></p>
                <p>Email: <input className='w-100' type="email" ref={emailRef} value={user.email}/></p>
                <p>Address: <input className='w-100' ref={addressRef} type="text"/></p>
                <p>Phone: <input className='w-100' ref={phoneRef} type="number" /></p>
                <input type="submit" value='purchase'/>
            </form>
        </div>
    );
};

export default PlaceOrder;