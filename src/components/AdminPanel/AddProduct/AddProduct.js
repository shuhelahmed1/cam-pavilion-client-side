import React, { useRef, useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [name,setName] = useState('')
    const [des,setDes] = useState('')
    const [image,setImage] = useState(null)
    const [error, setError] =  useState('');

    const handleAddProduct = e =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('name',name)
        formData.append('des',des)
        formData.append('image',image)
        fetch('https://cam-pavilion.vercel.app/products', {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data=>{
                    e.target.reset();
        })
    }

    return (
        <div className='addProductSection my-5'>
            <h2 style={{fontWeight: 'bold'}}>Add a Product</h2>
            <form className='cam-pavilion-form' onSubmit={handleAddProduct}>

                <input type="file" accept='image/*' onChange={e=> setImage( e.target.files[0])}/>

                <input required className='d-block w-100' type="text" onChange={e=> setName(e.target.value)} placeholder='product name'/>

                <input required className='d-block w-100 my-2' type="text" onChange={e=> setDes(e.target.value)} placeholder='product description'/>

                <input className='common-button' type="submit" value="Submit" />

                </form>
                <h5>{error}</h5>
        </div>
    );
};

export default AddProduct;