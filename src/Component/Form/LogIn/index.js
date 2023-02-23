import React, { useState, useReducer } from "react";

import InputForm from "../Component/InputForm";
import EmailIcon from "~/assets/svg/EmailIcon";
import LockIcon from "~/assets/svg/LockIcon";
import EyeIcon from "~/assets/svg/EyeIcon";
import EyeSlashIcon from "~/assets/svg/EyeSlashIcon";
import Button from "../Component/Component/Button";
import { initialOptions } from "../helper/initialOptions";
import reducerOptions from "../helper/reducerOptions";
import validateHandle from "../helper/validateHandle";
import Notification from "~/Component/Notification";

function LogIn({ cN, accounts }) {
  const { email, password } = initialOptions;
  const [options, dispacthOptions] = useReducer(reducerOptions, {
    email,
    password,
  });
  const [showPassword, setShowPassword] = useState(true);
  const [onValidate, setOnValidate] = useState(false);
  const [{ notiState, notiContent, countDown, unMount }, setNoti] = useState(
    {}
  );

  //Submit form
  function handleSubmit(event) {
    event.preventDefault();

    //Check error
    if (Object.values(options).some((option) => option?.message)) {
      return;
    }

    const data = validateHandle({
      options,
      dispatch: dispacthOptions,
      onValidate,
      setOnValidate,
    });

    if (!data || Object.values(data).length !== Object.values(options).length) {
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
        countDown: 3000,
      });
    } else {
      setNoti({
        notiState: false,
        notiContent: "Tài khoản không chính xác",
        countDown: 3000,
      });
    }
  }

  return (
    <form className={cN("mainForm")} onSubmit={handleSubmit}>
      <InputForm
        cN={cN}
        onValidate={onValidate}
        option={options.email}
        dispatch={dispacthOptions}
        placeholder="Email"
      >
        <EmailIcon className={cN("icon")} />
      </InputForm>
      <InputForm
        cN={cN}
        onValidate={onValidate}
        option={options.password}
        dispatch={dispacthOptions}
        placeholder="Password"
        type={showPassword ? "password" : "text"}
      >
        <span
          onClick={() => {
            setShowPassword((pre) => !pre);
          }}
        >
          {showPassword ? (
            <EyeSlashIcon className={cN("icon", "passwordIcon")} />
          ) : (
            <EyeIcon className={cN("icon", "passwordIcon")} />
          )}
        </span>
        <LockIcon className={cN("icon")} />
      </InputForm>
      <span>
        <Button className={cN("button")} text="LOG IN" />
        <p>Forgot password?</p>
      </span>
      {unMount || (
        <Notification
          state={notiState}
          content={notiContent}
          countDown={countDown}
          setNoti={setNoti}
        />
      )}
    </form>
  );
}

export default LogIn;
