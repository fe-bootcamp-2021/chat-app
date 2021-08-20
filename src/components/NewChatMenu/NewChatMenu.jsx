import React, { useState } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import { Pen, User, Speaker, Group, Close } from '../Icons/icons';
import { types } from '../../constants/types';
import classes from './NewChatMenu.module.css';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';

export default function NewChatMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleBtnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={classes.wrapper}>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <NewChatMenuRow rowContent={<Speaker />} rowName={'New Channel'} />
        <NewChatMenuRow rowContent={<Group />} rowName={'New Group'} />
        <NewChatMenuRow rowContent={<User />} rowName={'New Private Chat'} />
      </div>
      <Button
        btnName={isVisible ? <Close /> : <Pen />}
        onClick={handleBtnClick}
        className={classes.NewChatMenuBtn}
        type={types.button.type}
      />
    </div>
  );
}
