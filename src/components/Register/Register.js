
import useFirebase from '../../hook/useFirebase';
import './Register.css';
const Register = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,toggleLogin,handleName,handleGoogleLogIn} = useFirebase();
    return (
        <div className='register-form-section mx-auto my-5'>
            <form onSubmit={handleRegister}>
                <h2>{isLogin ? 'Login' : 'Register'} here: </h2>
                <input className='d-block w-100 mb-2 mt-3' onBlur={handleName} type="text" placeholder='Name'/>
                <input className='d-block w-100 my-2' onBlur={handleEmail} type="email" placeholder='Email'/>
                <input className='d-block w-100 my-2' onBlur={handlePass} type="password" placeholder='Password'/>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1'>Already registerd?</label>
                {/* <input type="submit" value='register'/> */}
                <button type='submit'>{isLogin ? 'Login' : 'register'}</button>
                </form>
                <br />
                <hr />
                <br />
                <button onClick={handleGoogleLogIn}>Login using Google</button>
        </div>
    );
};

export default Register;