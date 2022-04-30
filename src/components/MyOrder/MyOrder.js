import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import handleDeleteOrder from '../MyOrders/MyOrders'

const MyOrder = ({order}) => {
    const [orders,setOrders] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://morning-refuge-64241.herokuapp.com/orders?email=${user.email}`, {
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[user.email])
    
    
    return (
        <>
            <div style={{fontWeight: 'bold'}} className='border border-1 p-3'>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Phone: {order.phone}</p>
            <p>Product Id: {order._id}</p>
            <button className='common-button' onClick={()=>handleDeleteOrder(order._id)}>Cancel</button>
        </div>
        </>
    );
};

export default MyOrder;