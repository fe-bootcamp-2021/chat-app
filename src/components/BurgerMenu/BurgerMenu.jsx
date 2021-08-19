import React from 'react';
import { Menu } from '../Icons/icons';
import classes from './BurgerMenu.module.css';

function BurgerMenu() {
  return (
    <div className={classes.circle}>
      <Menu />
    </div>
  );
}

export default BurgerMenu;
