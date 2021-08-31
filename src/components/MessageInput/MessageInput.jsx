import React from 'react';
import FileUpload from '../FileUpload/FileUpload';
import SendMessage from '../SendMessage/SendMessage';
import classes from './MessageInput.module.css';

function MessageInput() {
  return (
    <div className={classes.messageInput}>
      <input type='text' placeholder='Message' className={classes.input} />
      <SendMessage />
      <FileUpload />
    </div>
  );
}

export default MessageInput;
