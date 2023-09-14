import React from "react";
import CloseIcon from "../svgs/CloseIcon";
import styles from "./Modal.module.scss";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  title?: string;
  children: JSX.Element;
}

const Modal = ({ isOpen, setIsOpen, title, children }: IModalProps) => {
  return (
    <div
      className={`${styles.modalContainer} ${
        isOpen ? styles.show : styles.hide
      }`}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.close_icon} onClick={setIsOpen}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
