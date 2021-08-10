import React from 'react';
import './Login.css';
import { TelegramLogo } from '../../../img/icons';
import Input from '../../Input/Input';

function Login() {
  return (
    <div className='formContainer'>
      <div className='logo'>
        <TelegramLogo />
      </div>
      <h1 className='login-form-title'>Sign in to Celegram</h1>
      <p>Please confirm your username and enter your password.</p>
      <Input type='text' label='Username' />
      <Input type='password' label='Password' />
      <button className='login-btn'>Confirm</button>
      <a>Create Account</a>
    </div>
  );
}

export default Login;
