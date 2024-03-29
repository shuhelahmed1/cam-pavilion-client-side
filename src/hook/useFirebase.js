import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, getIdToken, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
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
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    

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
    const registerNewUser = (email,password) =>{

        // if(!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)){
        //     setError('Please provide six characters, one uppercase, one number and one special character.')
        //     return;
        // }
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            const newUser = {email, displayName: name, password}
            setUser(newUser)
            // save user to the database
            saveUser(email,name,'POST')
            setError('')
            verifyEmail();
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('Email verification sent!')
    // ...
  });
    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
            setError('Login success.')
        })
        .catch(error=>{
            setError(error.message)  
        })
    }

    const handleGoogleLogIn = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(result.user);
            saveUser(user.email, user.displayName,'PUT')
        })
        .finally(()=>{setIsLoading(false)})
    }

    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
  .then(() => {
      alert('Reset password email sent successfully ')
  })
  .catch((error) => {
    
  });
    }

    

    const logOut = ( ) =>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>{setIsLoading(false)})
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[auth])

    const saveUser = (email, displayName,method) =>{
        const user = {email, displayName}
        fetch('https://cam-pavilion.vercel.app/users',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
        })
    }

    useEffect(()=>{
        fetch(`https://cam-pavilion.vercel.app/users/${user.email}`)
        .then(res=>res.json())
        .then(data=> setAdmin(data.admin))
    },[user.email])

    return{
        handleRegister,
        isLogin,
        isLoading,
        handleEmail,
        handlePass,
        toggleLogin,
        user,
        admin,
        logOut,
        handleName,
        handleGoogleLogIn,
        error,
        handleResetPassword,
        name,
        registerNewUser
    }
}

export default useFirebase;
