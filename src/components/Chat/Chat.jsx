import React from 'react';

import NavBarChat from '../NavBarChat/NavBarChat';
import Message from '../Message/Message';
import MessageInput from '../MessageInput/MessageInput';
import messageTypes from '../../constants/messageTypes.constant'

import classes from './Chat.module.css';

function Chat() {
  return (
    <div className={classes.chat}>
      <NavBarChat />
      <div className={classes.messages}>
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.otherUser} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
        <Message type={messageTypes.mine} />
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
