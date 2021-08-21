import React from "react";
import classes from "./NewChatMenuRow.module.css";

function NewChatMenuRow({ rowContent, rowName, checkBox }) {
  return (
    <div className={classes.NewChatMenuRow}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={classes.text}> {rowName} </span>
      {checkBox}
    </div>
  );
}

export default NewChatMenuRow;
