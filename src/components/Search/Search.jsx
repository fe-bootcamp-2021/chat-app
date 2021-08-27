import React from 'react';
import { types } from '../../constants/formTypes';
import classes from './Search.module.css';
import { Search } from '../Icons/icons';

function InputSearch() {
  return (
    <div className={classes.searchBox}>
      <input
        type={types.input.search.type}
        className={classes.search}
        placeholder={types.input.search.name}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
    </div>
  );
}

export default InputSearch;
