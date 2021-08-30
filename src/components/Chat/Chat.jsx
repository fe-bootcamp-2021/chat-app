import React from 'react';
import NavBarChat from '../NavBarChat/NavBarChat';
import Message from '../Message/Message'
import classes from './Chat.module.css';

function Chat() {
  return (
    <div className={classes.chat}>
      <NavBarChat />
      <div className={classes.messages}>
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'otherUser'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
        <Message type={'mine'} />
      </div>
    </div>
  );
}

export default Chat;
