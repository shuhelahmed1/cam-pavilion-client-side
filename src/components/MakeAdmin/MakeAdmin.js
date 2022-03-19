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
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Successfully admin added.')
        })
    }
    return (
        <>
        <h2 className='mt-5 text-center' style={{fontWeight: 'bold'}}>Create an Admin</h2>
            <div className='create-admin-form-container'>
                <form className='cam-pavilion-form' onSubmit={handleAdminSubmit}>
                <input required onBlur={handleEmail} type="email" placeholder='Enter email'/>
                <button className='common-button' type='submit'>Create</button>
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;