import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({product}) => {
    const {name,des,image} = product;
    return (
        <div className='product-card'>
            <img style={{width: '200px', height: '200px'}} className='d-block mx-auto' src={`data:image/png;base64,${image}`} alt="productImg" />
            <hr />
            <h6>{name}</h6>
            <p>{des}</p>
            <Link to={`/products/purchase/${product._id}`}>Purchase</Link>
        </div>
    );
};

export default Product;