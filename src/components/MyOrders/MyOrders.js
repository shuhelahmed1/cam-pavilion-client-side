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
        }
    })
    }
}
    
    return (
        <div className='w-75 mx-auto my-4'>
            <h2 style={{fontWeight: 'bold'}}>My Orders</h2>
            <div style={{gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px'}} className='d-grid'>
                {
                    orders.map(order=>
                        <MyOrder key={order._id} order={order}><button className='common-button' onClick={()=>handleDeleteOrder(order._id)}>Cancel</button></MyOrder> 
                    )
                }
            </div>
           
        </div>
    );
};

export default MyOrders;