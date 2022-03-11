import React from 'react';
import { Link } from 'react-router-dom';
import './MoreProduct.css';

const MoreProduct = ({moreproduct}) => {
    return (
        <div className='moreProductCard'>
            <img className='w-75 d-block mx-auto' src={moreproduct.imgUrl} alt="" />
            <hr />
            <h6 style={{fontSize: '11px'}}>{moreproduct.name}</h6>
            <p style={{fontSize: '11px'}}>{moreproduct.des}</p>
            <Link to={`/products/purchase/${moreproduct._id}`}>Purchase</Link>
        </div>
    );
};

export default MoreProduct;