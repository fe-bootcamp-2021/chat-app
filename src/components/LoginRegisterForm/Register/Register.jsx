import React from 'react';
import { Link } from 'react-router-dom';
import { TelegramLogo } from '../../../img/icons';
import Input from '../../Input/Input';

function Register() {
  return (
    <div className='formContainer'>
      <div className='logo'>
        <TelegramLogo />
      </div>
      <h1 className='login-form-title'>Sign up to Celegram</h1>
      <Input type='text' label='Name' />
      <Input type='text' label='Surname' />
      <Input type='text' label='Username' />
      <Input type='email' label='Mail' />
      <Input type='password' label='Password' />
      <Input type='password' label='Repeat password' />
      <button className='login-btn'>Confirm</button>
      <Link to='/'>Log in</Link>
    </div>
  );
}

export default Register;
