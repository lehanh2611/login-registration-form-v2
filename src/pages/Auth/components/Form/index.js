import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./.module.scss";
import Button from "../../../../components/Button";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const cN = classNames.bind(styles);
const titleLoginSub = "Have an Account?";
const titleSignUpSub = "Don't Have an Account?";
const content =
  "Banjo tote bag bigcycle rights, High life sartorial cray carft beer whatever street art fap.";

function Form() {
  const [isSignInMode, setIsSignInMode] = useState(true); // true = SIGN IN

  const styleHandle = () => setIsSignInMode((preStyle) => !preStyle);

  const Form = isSignInMode ? SignIn : SignUp;

  useEffect(() => {
    document.querySelector("head title").innerText = isSignInMode
      ? "Sign in"
      : "Sign up";
  }, [isSignInMode]);

  return (
    <div className={cN("form")} state={isSignInMode ? "SIGN IN" : "SIGN UP"}>
      <div className={cN("sub")}>
        <h3 className={cN("title")}>
          {isSignInMode ? titleSignUpSub : titleLoginSub}
        </h3>

        <p className={cN("content")}>{content}</p>

        <Button className={cN("button")} onClick={styleHandle}>
          {isSignInMode ? "SIGN UP" : "SIGN IN"}
        </Button>
      </div>

      <div className={cN("cushion")}>
        <h3 className={cN("title")}>{isSignInMode ? "SIGN IN" : "SIGN UP"}</h3>

        <Form />
      </div>
    </div>
  );
}

export default Form;
