import React from "react";
import Button from "../../Button/Button";
import styles from "./SuccessFormPopup.module.scss";

interface ISuccessFormPopupProps {
  close: () => void;
}

const SuccessFormPopup = ({ close }: ISuccessFormPopupProps) => {
  return (
    <div className={styles.successForm}>
      <h1>Your submission is successful!</h1>
      <p>We will get in touch with you prior to the platform launch.</p>
      <Button variant="primary" text="Close" onClick={close} />
    </div>
  );
};

export default SuccessFormPopup;
