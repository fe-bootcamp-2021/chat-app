import React, { useEffect, useState } from 'react';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NewChatMenu from '../NewChatMenu/NewChatMenu';
import Search from '../Search/Search';
import ToChatMenu from '../ToChatMenu/ToChatMenu';
import idGen from '../../helpers/idGenerator.helper';

import classes from './Sidebar.module.css';
import { getUser } from '../../services/user.services';

function Sidebar() {
  const [toChat, setToChat] = useState([]);

  useEffect(() => {
    getUser().then((res) => {
      setToChat(Object.values(res));
    });
  }, []);

  return (
    <>
      <div className={classes.Sidebar}>
        <div className={classes.sidebarHeader}>
          <BurgerMenu />
          <Search />
        </div>
        <div className={classes.sidebarContent}>
          {toChat.map(({ avatar, name, surname, lastMessage, lastMessageDate }) => {
            return (
              <ToChatMenu
                key={idGen()}
                avatar={avatar}
                name={name}
                surname={surname}
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
