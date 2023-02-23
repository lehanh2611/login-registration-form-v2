import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import Background from "~/Component/Background";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";
import Button from "~/Component/Button";

const cN = classNames.bind(styles);
const titleLoginSub = "Have an Account?";
const titleSignUpSub = "Don't Have an Account?";
const content =
  "Banjo tote bag bigcycle rights, High life sartorial cray carft beer whatever street art fap.";

function Auth() {
  const [style, setstyle] = useState(false); // true = LOG IN
  const formRef = useRef();
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("Accounts")) ?? []
  );

  //Set window title
  useEffect(() => {
    document.querySelector("head title").innerText = style
      ? "Log in"
      : "Sign up";
  }, [style]);

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
    <>
      <Background />
      <div className={cN("form")} state={style ? "LOG IN" : "SIGN UP"}>
        <div ref={formRef} className={cN("body")}>
          <h3 className={cN("title")}>{style ? "LOG IN" : "SIGN UP"}</h3>
          {style ? (
            <LogIn cN={cN} accounts={accounts} />
          ) : (
            <SignUp cN={cN} accounts={accounts} setAccounts={setAccounts} />
          )}
        </div>
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
    </>
  );
}

export default Auth;
