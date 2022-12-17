import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../api/requestApi';
import { GET_USERS } from '../api/user.api';
import { successGetAllUsers } from './user.actions';
import { REQUEST_GET_ALL_USER } from './user.type';

function* getAllUsers({ payload }) {
  try {
    const { data } = yield call(fetchData, {
      url: GET_USERS,
    })

    yield put(successGetAllUsers(data))
  } catch (error) {
    console.log(error)
  }
}


export function* userSaga() {
  yield takeEvery(REQUEST_GET_ALL_USER, getAllUsers);
}
