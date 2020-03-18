import React from "react";
import styles from "./Button.module.css";

export const Button = ({ handleClick, children }) => {
  return (
    <button type="button" className={styles.customButton} onClick={handleClick}>
      {children}
    </button>
  );
};
