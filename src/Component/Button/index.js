import classNames from "classnames/bind";
import styles from "./.module.scss";

const cN = classNames.bind(styles);

function Button({ className, text, onClick }) {
  return (
    <button className={cN("button", className)} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
