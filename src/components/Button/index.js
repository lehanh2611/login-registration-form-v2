import classNames from "classnames/bind";
import styles from "./.module.scss";

const cN = classNames.bind(styles);

function Button({ className, children, ...props }) {
  return (
    <button className={cN("button", className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
