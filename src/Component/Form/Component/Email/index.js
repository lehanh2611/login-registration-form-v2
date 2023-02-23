import { useEffect, useRef } from "react";
import Input from "../Component/Input";
import EmailIcon from "~/assets/svg/EmailIcon";

function Email({ cN, reference }) {
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
        className={cN("email")}
        type="text"
        placeholder={"Email"}
      />
      <EmailIcon className={cN("icon")} />
      <p ref={messageRef} className={cN("message")}></p>
    </div>
  );
}

export default Email;
