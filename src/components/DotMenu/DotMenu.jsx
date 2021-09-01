import React, { useState } from "react";
import cn from "classnames";

import { useAuth } from "../../hooks/useAuth.hook";
import Button from "../Button/Button";
import { Checked, Delete, Notify, DotMenu } from "../Icons/icons";
import NewChatMenuRow from "../NewChatMenuRow/NewChatMenuRow";
import { types } from "../../constants/formTypes.constant";

import classes from "./DotMenu.module.css";
import { useHistory } from "react-router-dom";

function DotMenuChat() {
  const [isVisible, setIsVisible] = useState(false);
  const { signout } = useAuth();
  const history = useHistory();

  // const handleClick = () => { // zhamanakavor popoxutyun
  //   setIsVisible(!isVisible);
  // };
  
  const handleSubmit = () => {
    history.replace("/");
    signout();
  };

  return (
    <>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <NewChatMenuRow rowContent={<Notify />} rowName={"Unmute"} />
        <NewChatMenuRow rowContent={<Checked />} rowName={"Select Messages"} />
        <NewChatMenuRow rowContent={<Delete />} rowName={"Delete Chat"} />
      </div>
      <Button
        className={classes.icon}
        type={types.button.type}
        onClick={handleSubmit}
        btnName={<DotMenu />}
      />
    </>
  );
}

export default DotMenuChat;
