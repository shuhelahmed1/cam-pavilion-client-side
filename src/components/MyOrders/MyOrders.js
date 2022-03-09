import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './MyOrders.css';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[])
    return (
        <div className='w-75 mx-auto'>
            <h2>MY ORDERS</h2>
            {
                orders.map(order=><Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default MyOrders;