export const SET_VALUE_EMAIL = "set-value-email";
export const SET_VALUE_FULL_NAME = "set-value-full-name";
export const SET_VALUE_PASSWORD = "set-value-password";

export const SET_MESSAGE_EMAIL = "set-message-email";
export const SET_MESSAGE_FULL_NAME = "set-message-full-name";
export const SET_MESSAGE_PASSWORD = "set-message-password";

function reducerOptions(state, action) {
  switch (action.type) {
    case SET_VALUE_EMAIL: {
      return { ...state, email: { ...state.email, value: action.payload } };
    }
    case SET_VALUE_FULL_NAME: {
      return {
        ...state,
        fullName: { ...state.fullName, value: action.payload },
      };
    }
    case SET_VALUE_PASSWORD: {
      return {
        ...state,
        password: { ...state.password, value: action.payload },
      };
    }
    case SET_MESSAGE_EMAIL: {
      return {
        ...state,
        email: { ...state.email, message: action.payload },
      };
    }
    case SET_MESSAGE_FULL_NAME: {
      return {
        ...state,
        fullName: { ...state.fullName, message: action.payload },
      };
    }
    case SET_MESSAGE_PASSWORD: {
      return {
        ...state,
        password: { ...state.password, message: action.payload },
      };
    }
  }
  throw new Error("Invalid action: " + action.type);
}

export default reducerOptions;
