
import useFirebase from '../../hook/useFirebase';
import './Register.css';
const Register = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,toggleLogin} = useFirebase();
    return (
        <div className='register-form-section mx-auto my-5'>
            <form onSubmit={handleRegister}>
                <h2>{isLogin ? 'Login' : 'Register'} here: </h2>
                <input className='d-block w-100 mb-2 mt-3' onBlur={handleEmail} type="email" placeholder='email'/>
                <input className='d-block w-100 my-2' onBlur={handlePass} type="password" placeholder='password'/>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1'>Already registerd?</label>
                {/* <input type="submit" value='register'/> */}
                <button type='submit'>{isLogin ? 'Login' : 'register'}</button>
                </form>
        </div>
    );
};

export default Register;