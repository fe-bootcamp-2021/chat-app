import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NewChatMenu from "../NewChatMenu/NewChatMenu";
import Search from "../Search/Search";
import ToChatMenu from "../ToChatMenu/ToChatMenu";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <BurgerMenu />
        <Search />
      </div>
      <div className="sidebar__content" style={{ paddingTop: "60px" }}>
        <ToChatMenu />
        <ToChatMenu />
        <ToChatMenu />
        <ToChatMenu />
        <ToChatMenu />
        <ToChatMenu />
        <ToChatMenu />
        <NewChatMenu />
      </div>
    </div>
  );
}

export default Sidebar;
