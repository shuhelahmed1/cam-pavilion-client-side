import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  { useEffect, useState } from 'react';
import initializeAuthentication from '../components/authSystem/authSystem.init';

initializeAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [displayName, setdisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleName = e =>{
        setdisplayName(e.target.value)
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

    const handleGoogleLogIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
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
        logOut,
        handleName,
        handleGoogleLogIn
    }
}

export default useFirebase;
