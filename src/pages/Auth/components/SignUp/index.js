// import { useState, useEffect, useRef } from "react";

// import Email from "../Component/Email";
// import FullName from "../Component/FullName";
// import Password from "../Component/Password";
// import validateHandle from "../functions/validateHandle";
// import Notification from "~/Component/Notification";

// function SignIn({ cN, submitHandle, accounts, setAccounts }) {
//   const [options, setOptions] = useState({});
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const fullnameRef = useRef();
//   const firstRun = useRef(true);
//   const [{ notiState, notiContent, countDown, unMount }, setNoti] = useState(
//     {}
//   );

//   useEffect(() => {
//     setOptions({
//       email: {
//         type: "email",
//         ref: emailRef.current,
//         rules: ["email"],
//       },
//       fullname: {
//         type: "fullName",
//         ref: fullnameRef.current,
//         rules: ["minLength", "maxLength"],
//       },
//       password: {
//         type: "password",
//         ref: passwordRef.current,
//         rules: ["password"],
//       },
//     });
//   }, []);

//   //Sign in handle
//   useEffect(() => {
//     submitHandle.current = () => {
//       const data = validateHandle(Object.values(options), firstRun);

//       if (!data) {
//         return;
//       }

//       if (accounts.some((account) => account.email === data.email)) {
//         setNoti({
//           notiState: false,
//           notiContent: "Tài khoản đã tồn tại",
//           countDown: 5000,
//         });
//         return;
//       }

//       function User(email, fullName, password) {
//         this.id = accounts.length;
//         this.email = email;
//         this.fullName = fullName;
//         this.password = password;
//       }

//       const newUser = new User(data.email, data.fullName, data.password);

//       setAccounts((preAccounts) => {
//         const newAccounts = [...preAccounts, newUser];
//         localStorage.setItem("Accounts", JSON.stringify(newAccounts));
//         return newAccounts;
//       });
//       setNoti({
//         notiState: true,
//         notiContent: "Đăng ký thành công",
//         countDown: 5000,
//       });
//     };
//   });
//   return (
//     <>
//       <Email reference={emailRef} cN={cN} />
//       <FullName reference={fullnameRef} cN={cN} />
//       <Password reference={passwordRef} cN={cN} />
//       {unMount || (
//         <Notification
//           state={notiState}
//           content={notiContent}
//           countDown={countDown}
//           setNoti={setNoti}
//         />
//       )}
//     </>
//   );
// }

// export default SignIn;

import classNames from "classnames/bind";
import EmailIcon from "~/assets/svg/EmailIcon";
import LockIcon from "~/assets/svg/LockIcon";
import UserIcon from "~/assets/svg/UserIcon";
import useForm from "~/hooks/useForm";
import CustomizeButton from "../CustomizeButton";
import CustomizeInput from "../CustomizeInput";
import styles from "./.module.scss";
const cN = classNames.bind(styles);

export default function SignUp() {
  const {
    values: { username, fullName, password },
    onChange,
    handleSubmit,
  } = useForm({ defaultValue: { username: "", fullName: "", password: "" } });

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <CustomizeInput
        name="username"
        placeholder="Email"
        value={username}
        Icon={EmailIcon}
        onChange={onChange}
      />
      <CustomizeInput
        name="fullName"
        placeholder="Full Name"
        value={fullName}
        Icon={UserIcon}
        onChange={onChange}
      />
      <CustomizeInput
        name="password"
        placeholder="Password"
        value={password}
        Icon={LockIcon}
        onChange={onChange}
      />

      <div className={cN("footer")}>
        <CustomizeButton type="submit">SIGN UP</CustomizeButton>
      </div>
    </form>
  );
}
