import React from 'react';
import classes from './Message.module.css';

function Message({ type }) {
  return (
    <div className={type === 'mine' ? classes.myMessage : classes.otherUserMessage}>
      <p className={classes.message}>test</p>
      <p className={classes.messageTime}>11:11</p>
    </div>
  );
}

export default Message;
