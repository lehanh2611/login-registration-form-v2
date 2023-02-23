import classNames from "classnames/bind";
import EmailIcon from "~/assets/svg/EmailIcon";
import LockIcon from "~/assets/svg/LockIcon";
import useForm from "~/hooks/useForm";
import CustomizeButton from "../CustomizeButton";
import CustomizeInput from "../CustomizeInput";
import styles from "./.module.scss";
const cN = classNames.bind(styles);

// function LogIn({ cN, submitHandle, accounts }) {
//   const [options, setOptions] = useState({});
//   const emailRef = useRef();
//   const passwordRef = useRef();
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
//       password: {
//         type: "password",
//         ref: passwordRef.current,
//         rules: ["password"],
//       },
//     });
//   }, []);

//   //Log in handle
//   useEffect(() => {
//     submitHandle.current = () => {
//       const data = validateHandle(Object.values(options), firstRun);

//       if (!data) {
//         return;
//       }

//       const result = accounts.find(
//         (account) =>
//           account.email === data.email && account.password === data.password
//       );

//       if (result) {
//         setNoti({
//           notiState: true,
//           notiContent: "Đăng nhập thành công",
//           countDown: 5000,
//         });
//       } else {
//         setNoti({
//           notiState: false,
//           notiContent: "Tài khoản không chính xác",
//           countDown: 5000,
//         });
//       }
//     };
//   });

//   return (
//     <>
//       <Email reference={emailRef} cN={cN} />
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

// export default LogIn;

export default function SignIn() {
  const {
    values: { username, password },
    error,
    onChange,
    handleSubmit,
  } = useForm({ defaultValue: { username: "", password: "" } });

  const handleSubmitForm = (data) => {
    console.log(data, error);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <CustomizeInput
        name="username"
        placeholder="Email"
        value={username}
        Icon={EmailIcon}
        errorMessage={error?.username}
        onChange={onChange}
      />
      <CustomizeInput
        name="password"
        placeholder="Password"
        value={password}
        Icon={LockIcon}
        errorMessage={error?.password}
        onChange={onChange}
      />
      <div className={cN("footer")}>
        <p className={cN("forgot-password")}>Forgot password?</p>
        <CustomizeButton type="submit">SIGN IN</CustomizeButton>
      </div>
    </form>
  );
}
