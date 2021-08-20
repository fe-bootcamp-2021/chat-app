import React from "react";
import classes from "./ToChatMenu.module.css";

export default function ToChatMenu() {
  return (
    <>
      <div className={classes.toChatMenuWrapper}>
        <div className={classes.dialogAvatar}>
          <div
            className={classes.circle}
          ></div>
        </div>
        <div className={classes.userCaption}>
          <div className={classes.dialogTitle}>
            <div className={classes.userTitle}>
              <p>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className={classes.dialogTitleDetails}>
              <p>19.08.2021</p>
            </div>
          </div>
          <div className={classes.dialogSubTitle}>
            <p>
              Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
