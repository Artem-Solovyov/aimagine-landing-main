import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  text?: string;
  variant: string;
  startIcon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ text, variant, startIcon, onClick }: IButton) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      data-text={text}
      onClick={onClick}
    >
      {startIcon}
      {text}
    </button>
  );
};

export default Button;
