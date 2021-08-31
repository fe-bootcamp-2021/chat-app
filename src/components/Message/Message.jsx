import React from 'react';
import messageTypes from '../../constants/messageTypes.constant';
import classes from './Message.module.css';

function Message({ type }) {
  return (
    <div className={type === messageTypes.mine ? classes.myBubble : classes.othersBubble}>
      <div className={type === messageTypes.mine ? classes.myMessage : classes.otherUserMessage}>
        <p className={classes.message}>test</p>
        <p className={classes.messageTime}>11:11</p>
      </div>
    </div>
  );
}

export default Message;
