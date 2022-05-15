import React, { useRef, useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const imgRef = useRef();
    const nameRef = useRef();
    const desRef = useRef();
    const [error, setError] =  useState('');
    const handleAddProduct = e =>{
        e.preventDefault();
        const imgUrl = imgRef.current.value;
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const newProduct = {imgUrl,name,des};
        fetch('https://morning-refuge-64241.herokuapp.com/products', {
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(result=>{
            alert('Successfully product added.')
            e.target.reset();
        })
    }

    return (
        <div className='addProductSection my-5'>
            <h2 style={{fontWeight: 'bold'}}>Add a Product</h2>
            <form className='cam-pavilion-form' onSubmit={handleAddProduct}>
                <input required className='d-block w-100 my-2' type="text" ref={imgRef} placeholder='Img url'/>
                <input required className='d-block w-100' type="text" ref={nameRef} placeholder='product name'/>
                <input required className='d-block w-100 my-2' type="text" ref={desRef} placeholder='product description'/>
                <input className='common-button' type="submit" value="Submit" />
                </form>
                <h5>{error}</h5>
        </div>
    );
};

export default AddProduct;