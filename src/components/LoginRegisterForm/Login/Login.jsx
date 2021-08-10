import React from 'react';
import './Login.css';
import { TelegramLogo } from '../../../img/icons';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='formContainer'>
      <div className='logo'>
        <TelegramLogo />
      </div>
      <h1 className='login-form-title'>Sign in to Celegram</h1>
      <Link to='/register' style={{textDecoration: 'none'}}>Create Account</Link>
      <p>Please confirm your username and enter your password.</p>
      <Input type='text' label='Username' />
      <Input type='password' label='Password' />
      <button className='login-btn'>Confirm</button>
    </div>
  );
}

export default Login;
