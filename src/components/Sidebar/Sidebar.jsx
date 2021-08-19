import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Search from '../Search/Search';
import classes from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <BurgerMenu />
        <Search />
      </div>
      <div className='sidebar__content'></div>
    </div>
  );
}

export default Sidebar;
