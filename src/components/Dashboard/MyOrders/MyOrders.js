import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import useAuth from '../../../hook/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
 

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    const {user} = useAuth();
    const history = useHistory();
    useEffect(()=>{
        fetch(`https://cam-pavilion.vercel.app/orders?email=${user.email}`, {
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
            else if(res.status===401){
                history.push('/register')
            }
        })
        .then(data=> setOrders(data))
    },[user.email])

    return (
        <>
        {
            orders.length === 0 ? 
            <div className='spinner-section'>
            <Spinner className='spinner' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
             : 
             <div className='mx-auto my-4 order-section text-center'>
            <h2 style={{fontWeight: 'bold'}}>My Orders</h2>
                <table className='order-table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Phone</td>
                            <td>Id</td>
                            <td>Cancel Order</td>
                        </tr>
                    </thead>
                {
                    orders.map(order=>
                        <MyOrder key={order._id} order={order}>
                        </MyOrder>  
                    )
                }
                </table>
                
           
           
        </div>
        }
        
        </>
            )
};

export default MyOrders;
