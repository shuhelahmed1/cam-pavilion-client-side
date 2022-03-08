import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePass = e =>{
        setPassword(e.target.value)
    }
    const handleRegister = e=>{
        e.preventDefault()
        console.log(email,password)
     
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input onBlur={handleEmail} type="email" placeholder='email'/>
                <input onBlur={handlePass} type="password" placeholder='pass'/>
                <input type="submit" value='register'/>
                </form>
        </div>
    );
};

export default Register;