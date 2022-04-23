import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import useAuth from '../../hook/useAuth';
import MyOrder from '../MyOrder/MyOrder';
 

const MyOrders = () => {
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
        <div className='w-75 mx-auto my-4'>
            <h2 style={{fontWeight: 'bold'}}>My Orders</h2>
            <div style={{gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px'}} className='d-grid'>
                {
                    orders.map(order=>
                        <MyOrder key={order._id} order={order}></MyOrder> 
                    )
                }
            </div>
           
        </div>
            )
};

export default MyOrders;
