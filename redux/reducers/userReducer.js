import { USER_LOGIN, USER_LOGOUT } from "../types";

const initialState = {
  user: {},
  token: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        token: "so secret token",
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
