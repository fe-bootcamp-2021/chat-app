import React from 'react';
import { types } from '../../constants/formTypes.constant';
import Button from '../Button/Button';
import { Search } from '../Icons/icons';
import DotMenuChat from '../DotMenu/DotMenu';
import classes from './NavBarChat.module.css';

function NavBarChat() {
  return (
    <div className={classes.container}>
      <div className={classes.chatInfo}>
        <div className={classes.circle}></div>
        <div className={classes.context}>
          <p> Mher Sargsyan</p>
          <p> Welcome our website</p>
        </div>
      </div>
      <div className={classes.chatUtils}>
        <Button
          className={classes.icon}
          type={types.button.type}
          onClick={() => {
            alert('Hi There!');
          }}
          btnName={<Search />}
        />
        <DotMenuChat />
      </div>
    </div>
  );
}

export default NavBarChat;
