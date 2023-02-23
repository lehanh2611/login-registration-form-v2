import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import XIcon from "~/assets/svg/XIcon";

const cN = classNames.bind(styles);

function Notification({ state, content, countDown, setNoti }) {
  let timerId = useRef();
  state = state ? "success" : "error";

  useEffect(() => {
    if (content !== "" && countDown) {
      timerId.current = setTimeout(() => {
        setNoti({ unMount: true });
      }, countDown);
    }
    return () => {
      clearTimeout(timerId.current);
    };
  });

  function deleteHandle() {
    setNoti({ unMount: true });
    clearTimeout(timerId);
  }

  return ReactDOM.createPortal(
    content && (
      <div className={cN("notification")} state={state}>
        <p>{content}</p>
        <XIcon onClick={deleteHandle} />
      </div>
    ),
    document.getElementById("modal-root")
  );
}

export default Notification;
