import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";
const cN = classNames.bind(styles);

function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cN("input", className)} {...props} />;
}

export default forwardRef(Input);
