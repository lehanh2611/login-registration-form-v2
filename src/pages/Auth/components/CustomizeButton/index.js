import React from "react";
import Button from "../../../../components/Button";
import classNames from "classnames/bind";
import styles from "./.module.scss";
const cN = classNames.bind(styles);

export default function CustomizeButton({ children, className, ...props }) {
  return (
    <Button className={cN("button", className)} {...props}>
      {children}
    </Button>
  );
}
