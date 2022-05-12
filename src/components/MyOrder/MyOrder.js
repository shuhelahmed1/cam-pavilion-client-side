import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import handleDeleteOrder from '../MyOrders/MyOrders'
import './MyOrder.css';
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

    // delete an order
    const handleDeleteOrder = id =>{
        const confirm = window.confirm('Are you sure to cancel the order.');
        if(confirm){
            const url = `https://morning-refuge-64241.herokuapp.com/orders/${id}`;
        fetch(url , {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Successfully cancelled the order.');
                const remainingOrders = orders.filter(order => order._id !== id)
                setOrders(remainingOrders)
                window.location.reload(true)
            }
        })
        }
    }
    
    
    return (
        <>
            <div className='order-card'>
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