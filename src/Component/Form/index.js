import { useState, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import Button from "./Component/Component/Button";

const cN = classNames.bind(styles);
const titleLoginSub = "Have an Account?";
const titleSignUpSub = "Don't Have an Account?";
const content =
  "Banjo tote bag bigcycle rights, High life sartorial cray carft beer whatever street art fap.";

function Form() {
  const [style, setstyle] = useState(false); // true = LOG IN
  const submitHandle = useRef();
  const formRef = useRef();
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("Accounts")) ?? []
  );

  //Set window title
  document.querySelector("head title").innerText = style ? "Log in" : "Sign up";

  //Start validate
  function submit(event) {
    event.preventDefault();
    submitHandle.current();
  }

  function styleHandle() {
    const form = formRef.current;

    setstyle((preStyle) => !preStyle);

    //Css handle
    form.style.opacity = 0.2;
    setTimeout(() => {
      form.style.opacity = 1;
    }, 200);
  }

  return (
    <div className={cN("form")} state={style ? "LOG IN" : "SIGN UP"}>
      <form ref={formRef} className={cN("body")} onSubmit={submit}>
        <h3 className={cN("title")}>{style ? "LOG IN" : "SIGN UP"}</h3>
        {style ? (
          <LogIn cN={cN} submitHandle={submitHandle} accounts={accounts} />
        ) : (
          <SignIn
            cN={cN}
            submitHandle={submitHandle}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        )}
        <span>
          <Button
            className={cN("button")}
            text={style ? "LOG IN" : "SIGN UP"}
          />
          {style && <p>Forgot password?</p>}
        </span>
      </form>
      <div className={cN("sub")}>
        <h3 className={cN("title")}>
          {style ? titleSignUpSub : titleLoginSub}
        </h3>
        <p className={cN("content")}>{content}</p>
        <Button
          className={cN("button")}
          text={style ? "SIGN UP" : "LOG IN"}
          onClick={styleHandle}
        />
      </div>
      <div className={cN("cushion")}></div>
    </div>
  );
}

export default Form;
