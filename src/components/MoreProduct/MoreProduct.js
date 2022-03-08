import React from 'react';
import './MoreProduct.css';

const MoreProduct = ({moreproduct}) => {
    return (
        <div className='moreProductCard'>
            <img className='w-100' src={moreproduct.imgUrl} alt="" />
            <h4>{moreproduct.name}</h4>
            <p>{moreproduct.des}</p>
        </div>
    );
};

export default MoreProduct;