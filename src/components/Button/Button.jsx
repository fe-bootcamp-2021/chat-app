import React from "react";
import PropTypes from "prop-types";

function Button({ type, btnName, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {btnName}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  btnName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
};
