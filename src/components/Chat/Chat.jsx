import React from 'react';
import NavBarChat from '../NavBarChat/NavBarChat';
import classes from './Chat.module.css';

function Chat() {
  return (
    <div className={classes.navBarChat}>
      <NavBarChat />
    </div>
  );
}

export default Chat;
