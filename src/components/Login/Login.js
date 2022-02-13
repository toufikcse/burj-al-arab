import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {logInUsingGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
        .then(result => {
            navigate(redirect_url);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Enter your email'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Enter your password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to the site? <Link to="/register">Create a Account</Link></p>
                <div>--------or---------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">GoogleSignIn</button>
            </div>
        </div>
    );
};

export default Login;