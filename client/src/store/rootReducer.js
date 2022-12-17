import { combineReducers } from 'redux';
import { characterReducer } from './characters/characterReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  characters: characterReducer
});
