import React, { useRef } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const imgRef = useRef();
    const nameRef = useRef();
    const desRef = useRef();
    const handleAddProduct = e =>{
        e.preventDefault();
        const imgUrl = imgRef.current.value;
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const newProduct = {imgUrl,name,des};
        fetch('http://localhost:5000/products', {
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
            <h2 className='text-center'>Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                <input className='d-block w-100 my-2' type="text" ref={imgRef} placeholder='Img url'/>
                <input className='d-block w-100' type="text" ref={nameRef} placeholder='product name'/>
                <input className='d-block w-100 my-2' type="text" ref={desRef} placeholder='product description'/>
                <input className='bg-warning' type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default AddProduct;