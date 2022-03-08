import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <div>
            <h2 className='mx-auto mt-5 mb-2' style={{fontWeight: "bold",width:"80%"}}>OUR <span className='yellow-text'>PRODUCTS</span></h2>
            <div className='products-section mx-auto d-grid'>
                {
                    products.slice(0,6).map(product=> <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
        <div>
            <h2>explore</h2>
            <div>
                {
                    products.map(product=> <Explore key={product._id} product={product}></Explore>)
                }
            </div>
        </div>
        </>
    );
};

export default Products;