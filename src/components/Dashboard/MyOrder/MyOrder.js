import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
const MyOrder = ({order}) => {
    const [orders,setOrders] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
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
            const url = `http://localhost:5000/orders/${id}`;
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
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td>{order._id}</td>
            <td><button style={{border: 'none', backgroundColor: 'white'}} onClick={()=>handleDeleteOrder(order._id)}>&#9986;</button></td>
        </tr>
        </>
    );
};

export default MyOrder;