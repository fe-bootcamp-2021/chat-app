import React from "react";
import classes from "./Input.module.css";


function Input({ id, name, type, onChange, onBlur, value, label,autoFocus}) {
  return (
    <div className={classes.inputField}>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={classes.input}
        required
        autoFocus={autoFocus}
      />
      <label className={classes.inputBanner}>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Input;
