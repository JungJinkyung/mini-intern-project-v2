import { Dispatch, HTMLInputTypeAttribute } from "react";
import styles from "./login-input.module.css";

export default ({
  type,
  state,
  setState,
  placeholder
}: {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  state: string | null;
  setState: Dispatch<string> | Function;
}) => {
  return (
    <input
      className={`${styles.input}`}
      type={type}
      value={state || ""}
      placeholder={placeholder}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
};
