import React from 'react';
import { Link } from 'react-router-dom';
import './MoreProduct.css';

const MoreProduct = ({moreproduct}) => {
    return (
        <div className='moreProductCard'>
            <img className='w-100' src={moreproduct.imgUrl} alt="" />
            <h4>{moreproduct.name}</h4>
            <p>{moreproduct.des}</p>
            <Link to={`/products/${moreproduct._id}`}>Purchase</Link>
        </div>
    );
};

export default MoreProduct;