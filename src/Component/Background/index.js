import classNames from "classnames/bind";
import styles from "./.module.scss";

const cN = classNames.bind(styles);

function Background() {
  return <div className={cN("background")}></div>;
}

export default Background;
