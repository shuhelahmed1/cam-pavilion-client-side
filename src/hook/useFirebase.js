import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import  { useEffect, useState } from 'react';
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

    const logOut = ( ) =>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[])
    return{
        handleRegister,
        isLogin,
        handleEmail,
        handlePass,
        toggleLogin,
        user,
        logOut
    }
}

export default useFirebase;
