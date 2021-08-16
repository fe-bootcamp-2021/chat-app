import React from "react";
import classes from "./Button.module.css";

function Button({ type, btnName, onClick }) {
  return (
    <button type={type} onClick={onClick} className={classes.loginBtn}>
      {btnName}
    </button>
  );
}

export default Button;
