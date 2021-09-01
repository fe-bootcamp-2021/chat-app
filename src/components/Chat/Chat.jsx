import React, { useState } from "react";
import NavBarChat from "../NavBarChat/NavBarChat";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";
import messageTypes from "../../constants/messageTypes.constant";
import classes from "./Chat.module.css";
import getDateNow from '../../helpers/getDateNow.helper'

function Chat() {
  const currentUser = { uuid: 10 };
  const [messages, setMessages] = useState([
    {
      text: 'Hi',
      date: getDateNow(),
      author: {
        uuid: 10,
      },
    },
    {
      text: 'Hi',
      date: getDateNow(),
      author: {
        uuid: 10,
      },
    },
  ]);

  return (
    <div className={classes.chat}>
      <NavBarChat />
      <div className={classes.messages}>
        {messages.map(({ text, date, author}) => {
          return (
            <Message
              type={
                author.uuid === currentUser.uuid
                  ? messageTypes.mine
                  : messageTypes.otherUser
              }
              text={text}
              date={date}
            />
          );
        })}
      </div>
      <MessageInput
        onSend={(text) => {
          setMessages((m) => [
            ...m,
            {
              text,
              type: messageTypes.mine,
              date: getDateNow(),
              author: currentUser,
            },
          ]);
        }}
      />
    </div>
  );
}

export default Chat;
