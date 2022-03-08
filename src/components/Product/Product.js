import React from 'react';
import './Product.css';
const Product = ({product}) => {
    return (
        <div className='product-card'>
            <img className='w-100' src={product.imgUrl} alt="" />
            <h4>{product.name}</h4>
            <p>{product.des}</p>
        </div>
    );
};

export default Product;