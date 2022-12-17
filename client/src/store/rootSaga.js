import { all } from 'redux-saga/effects';
import { userSaga } from './user/userSaga';

export function* rootSaga() {
  yield all([
    userSaga(),
  ]);
};
