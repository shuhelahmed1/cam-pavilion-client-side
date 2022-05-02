import useAuth from '../../hook/useAuth';
import './Register.css';
const Register = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,toggleLogin,handleName,handleGoogleLogIn, error, handleResetPassword} = useAuth();
    return (
        <>
        <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} Here: </h2>
        <div className='register-form-section row row-cols-lg-10 row-cols-md-10 row-cols-10 mx-auto my-4'>
            <form className='cam-pavilion-form col' onSubmit={handleRegister}>
                <input className='text-input' required  onBlur={handleName} type="text" placeholder='Name'/>
                <input className='text-input' required  onBlur={handleEmail} type="email" placeholder='Email'/>
                <input className='text-input' required onBlur={handlePass} type="password" placeholder='Password'/>
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
        </>
    );
};

export default Register;