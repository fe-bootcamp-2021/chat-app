import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

function Button({ type, btnName, onClick }) {
  return (
    <button type={type} onClick={onClick} className={classes.loginBtn}>
      {btnName}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
