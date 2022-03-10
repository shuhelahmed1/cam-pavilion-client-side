import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';
import './Explore.css';
import '../Products/Products.css';

const Explore = () => {
    const [moreProducts, setMoreProducuts] = useState([]);
    useEffect(()=>{
        fetch('https://morning-refuge-64241.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setMoreProducuts(data))
    },[])
    return (
        <>
        <h2 style={{width: '90%',fontWeight: 'bold'}} className='mx-auto mt-5 mb-3'>MORE <span className='yellow-text'>PRODUCTS</span></h2>
        <div className='more-products-section d-grid mx-auto'>
            {
                moreProducts.map(moreproduct => <MoreProduct key={moreproduct._id} moreproduct={moreproduct}></MoreProduct>)
            }
        </div>
        </>
    );
};

export default Explore;