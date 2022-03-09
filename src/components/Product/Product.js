import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({product}) => {
    return (
        <div className='product-card'>
            <img className='w-75 d-block mx-auto' src={product.imgUrl} alt="" />
            <h6>{product.name}</h6>
            <p style={{fontSize: '12px'}}>{product.des}</p>
            <Link to={`/products/${product._id}`}>Purchase</Link>
        </div>
    );
};

export default Product;