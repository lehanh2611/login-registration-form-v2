import React from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";
import Input from "~/components/Input";
const cN = classNames.bind(styles);

export default function CustomizeInput({ Icon, errorMessage, ...props }) {
  return (
    <div className={cN("inputBox")}>
      <Input {...props} className={cN(errorMessage && "error")} />
      <Icon className={cN("icon")} />
      {errorMessage && <p className={cN("message")}>{errorMessage}</p>}
    </div>
  );
}
