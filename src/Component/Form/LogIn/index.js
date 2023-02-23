import { useState, useEffect, useRef } from "react";

import Email from "../Component/Email";
import Password from "../Component/Password";
import validateHandle from "../functions/validateHandle";
import Notification from "~/Component/Notification";

function LogIn({ cN, submitHandle, accounts }) {
  const [options, setOptions] = useState({});
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstRun = useRef(true);
  const [{ notiState, notiContent, countDown, unMount }, setNoti] = useState(
    {}
  );

  useEffect(() => {
    setOptions({
      email: {
        type: "email",
        ref: emailRef.current,
        rules: ["email"],
      },
      password: {
        type: "password",
        ref: passwordRef.current,
        rules: ["password"],
      },
    });
  }, []);

  //Log in handle
  useEffect(() => {
    submitHandle.current = () => {
      const data = validateHandle(Object.values(options), firstRun);

      if (!data) {
        return;
      }

      const result = accounts.find(
        (account) =>
          account.email === data.email && account.password === data.password
      );

      if (result) {
        setNoti({
          notiState: true,
          notiContent: "Đăng nhập thành công",
          countDown: 5000,
        });
      } else {
        setNoti({
          notiState: false,
          notiContent: "Tài khoản không chính xác",
          countDown: 5000,
        });
      }
    };
  });

  return (
    <>
      <Email reference={emailRef} cN={cN} />
      <Password reference={passwordRef} cN={cN} />
      {unMount || (
        <Notification
          state={notiState}
          content={notiContent}
          countDown={countDown}
          setNoti={setNoti}
        />
      )}
    </>
  );
}

export default LogIn;
