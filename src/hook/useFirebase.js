import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import  { useState } from 'react';
import initializeAuthentication from '../components/authSystem/authSystem.init';

initializeAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePass = e =>{
        setPassword(e.target.value)
    }
    const handleRegister = e =>{
        e.preventDefault()
        if(isLogin){
            processLogin(email,password)
        }
        else{
            registerNewUser(email,password)
        }
        e.target.reset();
        
    }
    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
            console.log(user)
        })
    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
            console.log(user)
        })
    }
    return{
        handleRegister,
        isLogin,
        handleEmail,
        handlePass,
        toggleLogin
    }
}

export default useFirebase;
