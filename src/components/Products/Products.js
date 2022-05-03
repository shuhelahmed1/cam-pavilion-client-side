import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 4;
    useEffect(()=>{
        fetch(`https://morning-refuge-64241.herokuapp.com/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber)
        })
    },[page])
    return (
        <>
        
        {
            products.length === 0 ? 

            <div className='spinner-section'>
            <Spinner className='spinner' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>

         :  
        <div>
            <div className='container mx-auto'>
                <h2 className='mt-5 mb-3' style={{fontWeight: "bold",width:"80%"}}>OUR <span className='yellow-text'>PRODUCTS</span></h2>
                <div className='products-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    {
                        products.map(product=> <Product key={product._id} product={product}></Product>)
                    }
            </div>
        </div>
            <div className="w-75 pagination mx-auto my-3">
                    {
                    [...Array(pageCount).keys()]
                    .map(number => <button className={number === page ? 'selected' : ''} key={number} onClick={()=> setPage(number)}>{number}</button>)
                    }
            </div>
        </div> 
        }
        </>
    );
};

export default Products;