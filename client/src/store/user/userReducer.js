import { SUCCESS_GET_ALL_USER } from "./user.type";

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_USER:
    return { ...state, users: action.payload };

    default:
      return state;
  }
};
