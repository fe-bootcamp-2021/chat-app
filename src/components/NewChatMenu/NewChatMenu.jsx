import React, { useState } from "react";
import cn from "classnames";
import Button from "../Button/Button";
import { Pen, User, Speaker, Group, Close } from "../Icons/icons";
import { types } from "../../constants/types";
import classes from "./NewChatMenu.module.css";

export default function NewChatMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleBtnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={classes.wrapper}>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <div className={classes.NewChatMenuRow}>
          <div className={classes.iconSpeaker}>
            <Speaker />
          </div>
          <span className={classes.testSpeaker}> New Channel </span>
        </div>
        <div className={classes.NewChatMenuRow}>
          <div className={classes.iconGroup}>
            <Group />
          </div>
          <span className={classes.testGroup}> New Group </span>
        </div>
        <div className={classes.NewChatMenuRow}>
          <div className={classes.iconUser}>
            <User />
          </div>
          <span className={classes.testUser}> New Private Chat</span>
        </div>
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
