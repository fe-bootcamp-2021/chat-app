import React from "react";
import classes from "./NewChatMenuRow.module.css";

function NewChatMenuRow({ rowContent, rowName,className }) {
  return (
    <div className={classes.NewChatMenuRow}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={className}> {rowName} </span>
    </div>
  );
}

export default NewChatMenuRow;
