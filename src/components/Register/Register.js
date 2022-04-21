import useAuth from '../../hook/useAuth';
import './Register.css';
const Register = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,toggleLogin,handleName,handleGoogleLogIn, error, handleResetPassword} = useAuth();
    return (
        <div className='register-form-section mx-auto my-4'>
            <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} Here: </h2>
            <form className='cam-pavilion-form w-100' onSubmit={handleRegister}>
                <input required className='d-block w-100 mb-2 mt-3' onBlur={handleName} type="text" placeholder='Name'/>
                <input required className='d-block w-100 my-2' onBlur={handleEmail} type="email" placeholder='Email'/>
                <input required className='d-block w-100 my-2' onBlur={handlePass} type="password" placeholder='Password'/>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1' className='mx-2'>Already registered?</label>
                <button className='common-button' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                <button className='d-block common-button mt-2' onClick={handleResetPassword}>Forget Password</button>
                </form>
                <h5 className='text-danger mt-3'>{error}</h5>
                <div>
                <h6 className='text-center mt-3'>or</h6>
                <button className='common-button mx-auto d-block mt-3' onClick={handleGoogleLogIn}>Login Using Google</button>
                </div>
        </div>
    );
};

export default Register;