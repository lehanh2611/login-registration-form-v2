import validate from "../validate";

function validateHandle({
  options,
  action,
  dispatch,
  onValidate,
  setOnValidate,
}) {
  if (!action) {
    if (!onValidate) {
      setOnValidate(true);
    }
    return Object.values(options).reduce((acc, option) => {
      return { ...acc, ...handle(option, option.actions.message) };
    }, {});
  } else {
    handle(options, action);
  }

  function handle(options, action) {
    let { type, rules, value } = options;
    const result = validate(type, rules, value);
    const message = result.message;

    if (!message) {
      if (type === "email") {
        value = value.toLowerCase();
      }
      dispatch({ type: action, payload: "" });
      return { [type]: value.trim() };
    } else {
      dispatch({ type: action, payload: message });
    }
  }
}

export default validateHandle;
