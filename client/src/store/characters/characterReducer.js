import { SUCCESS_GET_ALL_CHARACTER } from "./character.type";


const initialState = {
  characters: [],
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_CHARACTER:
    return { ...state, characters: action.payload };

    default:
      return state;
  }
};
