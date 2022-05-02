import React from 'react';
import { Link } from 'react-router-dom';
import './MoreProduct.css';

const MoreProduct = ({moreproduct}) => {
    return (
        <div className='moreProductCard col'>
            <img src={moreproduct.imgUrl} alt="" />
            <hr />
            <h6>{moreproduct.name}</h6>
            <p>{moreproduct.des}</p>
            <Link to={`/products/purchase/${moreproduct._id}`}>Purchase</Link>
        </div>
    );
};

export default MoreProduct;