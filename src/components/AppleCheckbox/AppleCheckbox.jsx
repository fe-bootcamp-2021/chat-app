import React, { useState } from 'react';
import '../../root.css';
import './AppleCheckbox.css';

function AppleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxClick() {
    setIsChecked(!isChecked);
  }

  return (
    <button onClick={handleCheckboxClick}>
      <span className={isChecked ? 'checkbox active-checkbox' : 'checkbox'}>
        <span className={isChecked ? 'round active-round' : 'round'}></span>
      </span>
    </button>
  );
}

export default AppleCheckbox;
