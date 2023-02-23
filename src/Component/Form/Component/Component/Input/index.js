import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";
const cN = classNames.bind(styles);

function Input(
  { className, type = "text", value, placeholder, onChange, onBlur, onFocus },
  ref
) {
  return (
    <input
      ref={ref}
      className={cN("input", className)}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

export default forwardRef(Input);
