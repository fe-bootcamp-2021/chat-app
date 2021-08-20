import React from 'react';
import classes from './NewChatMenuRow.module.css';

function NewChatMenuRow({ rowContent, rowName }) {
  return (
    <div className={classes.NewChatMenuRow}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={classes.text}> {rowName} </span>
    </div>
  );
}

export default NewChatMenuRow;

