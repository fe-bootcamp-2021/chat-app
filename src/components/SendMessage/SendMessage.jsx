import React from 'react';
import Button from '../Button/Button';
import { Arrow } from '../Icons/icons';
import classes from './SendMessage.module.css';

function SendMessage() {
  const handleClick = () => {
    alert('send message');
  };

  return (
    <div className={classes.circle}>
      <button onClick={handleClick}>
        <Arrow />
      </button>
    </div>
  );
}

export default SendMessage;
