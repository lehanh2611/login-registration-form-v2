import { useEffect, useRef } from "react";
import Input from "../Component/Input";
import UserIcon from "~/assets/svg/UserIcon";

function FullName({ cN, reference }) {
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
        className={cN("fullName")}
        placeholder={"Full name"}
      />
      <UserIcon className={cN("icon")} />
      <p ref={messageRef} className={cN("message")}></p>
    </div>
  );
}

export default FullName;
