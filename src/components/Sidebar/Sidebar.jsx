import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NewChatMenu from "../NewChatMenu/NewChatMenu";
import Search from "../Search/Search";
import ToChatMenu from "../ToChatMenu/ToChatMenu";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={classes.Sidebar}>
        <div className={classes.sidebarHeader}>
          <BurgerMenu />
          <Search />
        </div>
        <div className={classes.sidebarContent}>
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
          <ToChatMenu />
        </div>
      </div>
      <NewChatMenu />
    </>
  );
}

export default Sidebar;
