import { useEffect } from "react";
import Input from "~/Component/Input";
import validateHandle from "../../helper/validateHandle";

function InputForm({
  cN,
  onValidate,
  option,
  dispatch,
  messageValue,
  children,
  ...inputProps
}) {
  const actions = option.actions;
  const value = option.value;

  useEffect(() => {
    if (onValidate && option) {
      validateHandle({
        options: option,
        dispatch,
        action: actions.message,
      });
    }
  }, [value]);

  return (
    <div className={cN("inputBox")}>
      <Input
        {...inputProps}
        value={value}
        onChange={(event) => {
          dispatch({ type: actions.value, payload: event.target.value });
        }}
      />
      {children}
      <p className={cN("message")}>{option.message}</p>
    </div>
  );
}

export default InputForm;
