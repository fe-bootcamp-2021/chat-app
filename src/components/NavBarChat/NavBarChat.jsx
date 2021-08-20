import React from "react";
import { Search, DotMenu } from "../Icons/icons";
import classes from "./NavBarChat.module.css";

function NavBarChat() {
  return (
    <div className={classes.container}>
      <div className={classes.chatInfo}>
        <div className={classes.avatar}>
          <div className={classes.circle}></div>
        </div>
        <div className={classes.context}>
          <div className={classes.top}>
            <p> Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <div className={classes.bottom}>
            <p>
              {" "}
              Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </p>
          </div>
        </div>
      </div>
      <div className={classes.chatUtils}>
        <div className={classes.icon}>
          <div className={classes.iconHover}>
            <Search />
          </div>
        </div>
        <div className={classes.icon}>
          <div className={classes.iconHover}>
            <DotMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarChat;
