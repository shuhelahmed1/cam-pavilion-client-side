import React from 'react';

const MyOrder = ({order}) => {
    return (
        <div style={{fontWeight: 'bold'}} className='border border-1 p-3'>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Phone: {order.phone}</p>
            <p>Product Id: {order._id}</p>
        </div>
    );
};

export default MyOrder;