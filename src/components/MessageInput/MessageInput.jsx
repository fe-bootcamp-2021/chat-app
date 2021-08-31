import React, { useState } from "react";

import FileUpload from "../FileUpload/FileUpload";
import SendMessage from "../SendMessage/SendMessage";
import { types } from "../../constants/formTypes.constant";

import classes from "./MessageInput.module.css";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  return (
    <div className={classes.messageInput}>
      <input
        type={types.input.message.typ}
        placeholder={types.input.message.placeholder}
        className={classes.input}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <SendMessage onClick={() => onSend(message)} />
      <FileUpload />
    </div>
  );
}

export default MessageInput;