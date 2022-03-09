import React from 'react';
import './Order.css';

const Order = ({order}) => {
    return (
        <>
        <div className='d-grid order-container'>
            <div>{order.name}</div>
            <div>{order.email}</div>
            <div>{order.address}</div>
            <div>{order.phone}</div>     
        </div>
        </>
        
    );
};

export default Order;