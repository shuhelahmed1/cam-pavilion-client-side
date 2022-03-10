import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://morning-refuge-64241.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <div>
            <h2 className='mx-auto mt-5 mb-3' style={{fontWeight: "bold",width:"80%"}}>OUR <span className='yellow-text'>PRODUCTS</span></h2>
            <div className='products-section mx-auto d-grid'>
                {
                    products.slice(0,6).map(product=> <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
        </>
    );
};

export default Products;