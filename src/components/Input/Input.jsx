import React from 'react';
import './Input.css';

function Input({ type, label }) {
  return (
    <div className='input-field'>
      <input type={type} className='input' />
      <label className='input-banner'>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Input;
