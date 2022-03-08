import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <img className='w-100' src={product.imgUrl} alt="" />
            <h4>{product.name}</h4>
            <p>{product.des}</p>
        </div>
    );
};

export default Product;