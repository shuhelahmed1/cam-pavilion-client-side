import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  { useEffect, useState } from 'react';
import initializeAuthentication from '../components/authSystem/authSystem.init';

initializeAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleName = e =>{
        setName(e.target.value)
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
            const newUser = {email, displayName: name}
            setUser(newUser)
            // save user to the database
            saveUser(email,name,'POST')
        })
    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
            console.log(user)
        })
    }

    const handleGoogleLogIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(result.user);
            saveUser(user.email, user.displayName,'PUT')
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

    const saveUser = (email, displayName,method) =>{
        const user = {email, displayName}
        fetch('https://morning-refuge-64241.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('user info saved')
        })
    }
    return{
        handleRegister,
        isLogin,
        handleEmail,
        handlePass,
        toggleLogin,
        user,
        logOut,
        handleName,
        handleGoogleLogIn
    }
}

export default useFirebase;
