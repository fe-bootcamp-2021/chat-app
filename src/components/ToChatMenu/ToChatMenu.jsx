import React, { useState } from "react";
import classes from "./ToChatMenu.module.css";

export default function ToChatMenu() {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <>
      <div className={classes.toChatMenuWrapper}>
        <div className={classes.dialogAvatar}>
          <div
            className={classes.circle}
            style={{ backgroundColor: `${hex}` }}
            onClick={randomizedHex}
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
