import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({product}) => {
    return (
        <div className='product-card col'>
            <img style={{width: '50%'}} className='d-block mx-auto' src={product.imgUrl} alt="productImg" />
            <hr />
            <h6>{product.name}</h6>
            <p>{product.des}</p>
            <Link to={`/products/purchase/${product._id}`}>Purchase</Link>
        </div>
    );
};

export default Product;