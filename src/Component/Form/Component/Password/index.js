import { useState, useEffect, useRef } from "react";

import Input from "../Component/Input";
import LockIcon from "~/assets/svg/LockIcon";
import EyeIcon from "~/assets/svg/EyeIcon";
import EyeSlashIcon from "~/assets/svg/EyeSlashIcon";

function Password({ cN, reference }) {
  const [showPassword, setShowPassword] = useState(true);
  const inputRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    reference.current = {
      input: inputRef.current,
      message: messageRef.current,
    };
  });

  return (
    <div className={cN("inputBox")}>
      <Input
        ref={inputRef}
        className={cN("password")}
        type={showPassword ? "password" : "text"}
        placeholder={"Password"}
      />
      <span
        onClick={() => {
          setShowPassword((pre) => !pre);
        }}
      >
        {" "}
        {showPassword ? (
          <EyeSlashIcon className={cN("icon", "passwordIcon")} />
        ) : (
          <EyeIcon className={cN("icon", "passwordIcon")} />
        )}
      </span>
      <LockIcon className={cN("icon")} />
      <p ref={messageRef} className={cN("message")}></p>
    </div>
  );
}

export default Password;
