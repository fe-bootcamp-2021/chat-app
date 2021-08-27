import React from "react";
import classes from "./NewChatMenuRow.module.css";

function NewChatMenuRow({ rowContent, rowName, checkBox }) {
  return (
    <div className={classes.NewChatMenuRow}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={classes.text}> {rowName} </span>
      <div className={classes.checkBox}>{checkBox}</div>
    </div>
  );  
}

export default NewChatMenuRow;