
const initialState = {
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SUCCESS_GET_POSTS:
    // return { ...state, posts: action.payload };

    default:
      return state;
  }
};
