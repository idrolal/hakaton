import { SUCCESS_ADD_USER, REQUEST_ERROR, REQUEST_ADD_TOKEN } from "./user.type";

const initialState = {
  user: null,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ERROR:
      return { ...state, error: action.payload };

    case SUCCESS_ADD_USER:
      return {
        ...state, user: action.payload
      }
      case REQUEST_ADD_TOKEN:
      return {
        ...state, user: action.payload
      }
    default:
      return state;
  }
};
