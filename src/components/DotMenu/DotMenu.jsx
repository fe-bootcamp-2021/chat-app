import React, { useState } from "react";
import cn from "classnames";
import Button from "../Button/Button";
import { Checked, Delete, Notify, DotMenu } from "../Icons/icons";
import { types } from "../../constants/types";
import NewChatMenuRow from "../NewChatMenuRow/NewChatMenuRow";
import classes from "./DotMenu.module.css";

function DotMenuChat() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <NewChatMenuRow rowContent={<Notify />} rowName={"Unmute"}  className={classes.text}/>
        <NewChatMenuRow rowContent={<Checked />} rowName={"Select Messages"}  className={classes.text}/>
        <NewChatMenuRow rowContent={<Delete />} rowName={"Delete Chat"} className={classes.textColor}/>
      </div>
      <div className={classes.icon}>
        <Button
          className={classes.iconHover}
          type={types.button.type}
          onClick={handleClick}
          btnName={<DotMenu />}
        />
      </div>
    </>
  );
}

export default DotMenuChat;
