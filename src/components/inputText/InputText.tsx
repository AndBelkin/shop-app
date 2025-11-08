import type { FC, InputHTMLAttributes } from "react";
import styles from "./InputText.module.css";
import { MdClose } from "react-icons/md";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: "text" | "search" | "url" | "tel" | "email" | "password";
  onClear?: () => void;
}

const InputText: FC<InputTextProps> = (props: InputTextProps) => {
  return (
    <div className={styles.inputBox}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : props.label}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
      {props.onClear && props.value && <MdClose className={styles.clear} onClick={props.onClear} />}
    </div>
  );
};

export default InputText;
