import {
  SET_VALUE_EMAIL,
  SET_VALUE_FULL_NAME,
  SET_VALUE_PASSWORD,
  SET_MESSAGE_EMAIL,
  SET_MESSAGE_FULL_NAME,
  SET_MESSAGE_PASSWORD,
} from "./reducerOptions";

export const initialOptions = {
  email: {
    type: "email",
    value: "",
    rules: ["email"],
    actions: {
      value: SET_VALUE_EMAIL,
      message: SET_MESSAGE_EMAIL,
    },
  },
  fullName: {
    type: "fullName",
    value: "",
    rules: ["minLength", "maxLength"],
    actions: {
      value: SET_VALUE_FULL_NAME,
      message: SET_MESSAGE_FULL_NAME,
    },
  },
  password: {
    type: "password",
    value: "",
    rules: ["password"],
    actions: {
      value: SET_VALUE_PASSWORD,
      message: SET_MESSAGE_PASSWORD,
    },
  },
};
