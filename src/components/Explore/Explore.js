import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';
import './Explore.css';
import '../Products/Products.css';
import { Spinner } from 'react-bootstrap';

const Explore = () => {
    const [moreProducts, setMoreProducuts] = useState([]);
    useEffect(()=>{
        fetch('https://cam-pavilion-server-side.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setMoreProducuts(data.products))
    },[])
    return (
        <>
        <h2 style={{width: '90%',fontWeight: 'bold'}} className='mx-auto mt-5 mb-3'>MORE <span className='yellow-text'>PRODUCTS</span></h2>
        {
            moreProducts.length === 0 ? 
    
            <div className='spinner-section'>
                <Spinner className='spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

            : 

            <div className='container'>
                <div className='more-products-section row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    moreProducts.slice(0,14).map(moreproduct => <MoreProduct key={moreproduct._id} moreproduct={moreproduct}></MoreProduct>)
                }
                </div>
            </div>
        }
        
        </>
    );
};

export default Explore;