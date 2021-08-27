import React from "react";
import classes from "./NewChatMenuRow.module.css";

function NewChatMenuRow(props) {

  const { rowContent, rowName, checkBox } = props   //  destructuring props
  
  return (
    <div className={classes.NewChatMenuRow}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={classes.text}> {rowName} </span>
      <div className={classes.checkBox}>{checkBox}</div>
    </div>
  );  
}

export default NewChatMenuRow;
