import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {logInUsingGoogle} = useAuth();
    return (
        <div className='login-form'>
            <div>
                <h2>Registration</h2>
                <form >
                    <input type="text" name="" id="" placeholder='Enter your name'/>
                    <br />
                    <input type="email" name="" id="" placeholder='Enter your email'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Enter your password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Registered? <Link to="/login">Log in here</Link></p>
                <div>--------or---------</div>
                <button onClick={logInUsingGoogle} className="btn-regular">GoogleSignIn</button>
            </div>
        </div>
    );
};

export default Register;