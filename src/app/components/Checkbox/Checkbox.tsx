import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className={styles.checkbox_label}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox_input}
      />
      <span className={styles.checkbox_custom}></span>
      {label}
    </label>
  );
};

export default Checkbox;
