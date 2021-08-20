import React from "react";
import { types } from "../../constants/types";
import Button from "../Button/Button";
import { Search } from "../Icons/icons";
import DotMenuChat from "../DotMenu/DotMenu";
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
          <Button
            className={classes.iconHover}
            type={types.button.type}
            onClick={() => {
              alert("Hi There!");
            }}
            btnName={<Search />}
          />
        </div>
        <DotMenuChat />
      </div>
    </div>
  );
}

export default NavBarChat;
