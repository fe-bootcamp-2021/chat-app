import React from "react";
import classes from "./NavBarChat.module.css";

function NavBarChat() {
  return (
    <div className={classes.container}>
      <div className={classes.chatInfo}>
        <div className={classes.avatar}>
          <div className={classes.circle}></div>
        </div>
        <div className={classes.context}>
          <div className={classes.top}></div>
          <div className={classes.bottom}></div>
        </div>
      </div>
      <div className={classes.chatUtils}>
        <div className={classes.search}></div>
        <div className={classes.dotChat}></div>
      </div>
    </div>
  );
}

export default NavBarChat;
