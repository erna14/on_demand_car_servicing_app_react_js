import React, { useState } from "react";
import classes from "../UI/Settings.module.css";

function DropdownPanel() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={togglePanel} className={classes.toggle}>
        Change Email
      </button>
      {isOpen && (
        <div className={classes.panelContent}>
          <p>Panel Content Here</p>
        </div>
      )}
    </div>
  );
}

export default DropdownPanel;