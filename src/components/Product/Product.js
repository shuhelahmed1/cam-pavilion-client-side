import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({product}) => {
    return (
        <div className='product-card'>
            <img className='w-75 d-block mx-auto' src={product.imgUrl} alt="" />
            <hr />
            <h6 style={{fontSize: '12px'}}>{product.name}</h6>
            <p style={{fontSize: '10px'}}>{product.des}</p>
            <Link to={`/products/purchase/${product._id}`}>Purchase</Link>
        </div>
    );
};

export default Product;