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
        fetch('http://localhost:5000/users/admin',{
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
            <div className='create-admin-form-container row row-cols-1 row-cols-md-1 row-cols-lg-1'>
               <div className='col'>
                <form className='cam-pavilion-form' onSubmit={handleAdminSubmit}>
                    <input required onBlur={handleEmail} type="email" placeholder='Enter email'/>
                    <button className='common-button' type='submit'>Create</button>
                    </form>
               </div>
            </div>
        </>
    );
};

export default MakeAdmin;