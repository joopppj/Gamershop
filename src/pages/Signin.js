import React from 'react';

import Login from '../components/log-in/login';
import Signup from '../components/sign-up/signup';

import '../styles/Signin.scss';



const SigninPage = () => (
    <div className='signin-group'>
        <Login />
        <Signup />
    </div>

)

export default SigninPage;