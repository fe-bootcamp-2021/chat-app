import React from 'react';
import { types } from '../../constants/formTypes.constant';
import FileUpload from '../FileUpload/FileUpload';
import SendMessage from '../SendMessage/SendMessage';
import classes from './MessageInput.module.css';

function MessageInput() {
  return (
    <div className={classes.messageInput}>
      <input
        type={types.input.message.typ}
        placeholder={types.input.message.placeholder}
        className={classes.input}
      />
      <SendMessage />
      <FileUpload />
    </div>
  );
}

export default MessageInput;
