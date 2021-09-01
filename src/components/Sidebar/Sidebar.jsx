import React, { useState } from 'react';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NewChatMenu from '../NewChatMenu/NewChatMenu';
import Search from '../Search/Search';
import ToChatMenu from '../ToChatMenu/ToChatMenu';

import classes from './Sidebar.module.css';

function Sidebar() {
  const [toChat, setToChat] = useState([
    {
      avatar: '',
      fullName: 'Karlen Nersisyan',
      lastMessage: 'esim esim',
      lastMessageDate: '11',
    },
  ]);

  return (
    <>
      <div className={classes.Sidebar}>
        <div className={classes.sidebarHeader}>
          <BurgerMenu />
          <Search />
        </div>
        <div className={classes.sidebarContent}>
          {toChat.map(({ avatar, fullName, lastMessage, lastMessageDate }) => {
            return (
              <ToChatMenu
                avatar={avatar}
                fullName={fullName}
                lastMessage={lastMessage}
                lastMessageDate={lastMessageDate}
              />
            );
          })}
        </div>
      </div>
      <NewChatMenu />
    </>
  );
}

export default Sidebar;
