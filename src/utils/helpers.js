//Required
const REQUIRED_MESSAGE = [
  "Trường này không được bỏ trống",
  "Trường này là bắt buộc",
  "Vui lòng điền trường này",
];

//Email
const EMAIL = "email";
const EMAIL_RULE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const EMAIL_MESSAGE = "Email chưa hợp lệ";

//Password
const PASSWORD = "password";
const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W.])(?!.*\s).{8,}$/;
const PASSWORD_MESSAGE = "Mật khẩu chưa hợp lệ";

//Min length
const MIN_LENGTH = "minLength";
const MIN_LENGTH_RULE = 3;
const MIN_LENGTH_MESSAGE = `Trường này tối thiểu là ${MIN_LENGTH_RULE} ký tự`;

//Max length
const MAX_LENGTH = "maxLength";
const MAX_LENGTH_RULE = 30;
const MAX_LENGTH_MESSAGE = `Trường này tối đa là ${MAX_LENGTH_RULE} ký tự`;

export function validate(type, rules, value) {
  const output = { type: type, message: "" };

  if (value === "") {
    output.message =
      REQUIRED_MESSAGE[Math.floor(Math.random() * REQUIRED_MESSAGE.length)];
    return output;
  }

  for (const rule of rules) {
    if (output.message !== "") {
      break;
    }
    switch (rule) {
      case EMAIL: {
        if (!EMAIL_RULE.test(value)) {
          output.message = EMAIL_MESSAGE;
        }
        break;
      }
      case PASSWORD: {
        if (!PASSWORD_RULE.test(value)) {
          output.message = PASSWORD_MESSAGE;
        }
        break;
      }
      case MIN_LENGTH: {
        if (!(value.length >= MIN_LENGTH_RULE)) {
          output.message = MIN_LENGTH_MESSAGE;
        }
        break;
      }
      case MAX_LENGTH: {
        if (!(value.length <= MAX_LENGTH_RULE)) {
          output.message = MAX_LENGTH_MESSAGE;
        }
        break;
      }
      default:
        break;
    }
  }
  return output;
}

export function validateHandle(options, firstRun) {
  let output;

  // Check error
  if (
    options.some((option) => {
      return option.ref.message.innerText !== "";
    })
  ) {
    return;
  }

  function handle(option) {
    const ref = option.ref;
    const input = ref.input;
    const message = ref.message;
    const result = validate(option.type, option.rules, input.value);

    message.innerText = result.message;
    if (result.message === "") {
      input.style.borderColor = "var(--gray)";
      const value = input.value.toString().trim();
      return {
        [option.type]: option.type === "email" ? value.toLowerCase() : value,
      };
    } else {
      input.style.borderColor = "var(--primary)";
    }
  }

  // Validate all
  output = options.reduce((acc, option) => {
    return { ...acc, ...handle(option) };
  }, {});

  // Add event handle
  if (firstRun.current) {
    firstRun.current = false;

    for (const option of options) {
      option.ref.input.oninput = () => {
        output = handle(option);
      };
    }
  }

  if (Object.values(output).length === options.length) {
    return output;
  }
}
