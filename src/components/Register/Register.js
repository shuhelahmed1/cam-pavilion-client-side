import useAuth from '../../hook/useAuth';
import './Register.css';
const Register = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,toggleLogin,handleName,handleGoogleLogIn} = useAuth();
    return (
        <div className='register-form-section mx-auto my-4'>
            <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} Here: </h2>
            <form className='cam-pavilion-form w-100' onSubmit={handleRegister}>
                <input className='d-block w-100 mb-2 mt-3' onBlur={handleName} type="text" placeholder='Name'/>
                <input className='d-block w-100 my-2' onBlur={handleEmail} type="email" placeholder='Email'/>
                <input className='d-block w-100 my-2' onBlur={handlePass} type="password" placeholder='Password'/>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1'>Already registerd?</label>
                {/* <input type="submit" value='register'/> */}
                <button className='common-button ms-1' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <div>
                <h6 className='text-center mt-3'>or</h6>
                <button className='common-button mx-auto d-block mt-3' onClick={handleGoogleLogIn}>Login Using Google</button>
                </div>
        </div>
    );
};

export default Register;