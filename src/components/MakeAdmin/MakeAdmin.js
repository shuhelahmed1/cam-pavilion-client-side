import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        e.preventDefault();
        fetch('https://morning-refuge-64241.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
            .then(res=>res.json())
            .then(data=>{
                alert('Successfully admin added.')
            })
        })
    }
    return (
        <div>
            <h2 className='text-center mt-3' style={{fontWeight: 'bold'}}>CREATE AN ADMIN</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleEmail} type="email" placeholder='Enter email'/>
                <button className='common-button' type='submit'>Create</button>
                </form>
        </div>
    );
};

export default MakeAdmin;