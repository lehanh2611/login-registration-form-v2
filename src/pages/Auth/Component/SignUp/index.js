import React, { useState, useReducer } from "react";

import InputForm from "../Component/InputForm";
import EmailIcon from "~/assets/svg/EmailIcon";
import EyeIcon from "~/assets/svg/EyeIcon";
import EyeSlashIcon from "~/assets/svg/EyeSlashIcon";
import LockIcon from "~/assets/svg/LockIcon";
import UserIcon from "~/assets/svg/UserIcon";
import Button from "~/Component/Button";
import { initialOptions } from "../../helper/initialOptions";
import reducerOptions from "../../helper/reducerOptions";
import validateHandle from "../../helper/validateHandle";
import CreateID from "~/helper/CreateID";
import Notification from "~/Component/Notification";

function SignUp({ cN, accounts, setAccounts }) {
  const { email, fullName, password } = initialOptions;
  const [options, dispacthOptions] = useReducer(reducerOptions, {
    email,
    fullName,
    password,
  });
  const [onValidate, setOnValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
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

    if (accounts.some((account) => account.email === data.email)) {
      setNoti({
        notiState: false,
        notiContent: "Tài khoản đã tồn tại",
        countDown: 3000,
      });
      return;
    }

    function User(email, fullName, password) {
      this.id = CreateID();
      this.email = email;
      this.fullName = fullName;
      this.password = password;
    }

    const newUser = new User(data.email, data.fullName, data.password);

    setAccounts((preAccounts) => {
      const newAccounts = [...preAccounts, newUser];
      localStorage.setItem("Accounts", JSON.stringify(newAccounts));
      return newAccounts;
    });
    setNoti({
      notiState: true,
      notiContent: "Đăng ký thành công",
      countDown: 3000,
    });
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
        option={options.fullName}
        dispatch={dispacthOptions}
        placeholder="Fullname"
      >
        <UserIcon className={cN("icon")} />
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
        <Button className={cN("button")} text="SIGN IN" />
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

export default SignUp;
