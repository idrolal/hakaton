import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../api/requestApi';
import { GET_USERS } from '../api/user.api';
import { errorUser, successAddUser, successGetAllUsers } from './user.actions';
import { REQUEST_ADD_USER, REQUEST_GET_ALL_USER, REQUEST_ADD_TOKEN } from './user.type';

function* getAllUsers({ payload }) {
  try {
    const { data } = yield call(fetchData, {
      url: GET_USERS,
    })
    yield put(successGetAllUsers(data.user))
  } catch (error) {
    yield put(errorUser(error))
    console.log(error)
  }
}

function* addUser({ payload, url }) {
  try {
    const { data } = yield call(fetchData, {
      url,
      method: "POST",
      data: payload
    })
    localStorage.setItem('token', data.accessToken);
    yield put(successAddUser(data.user))
  } catch (error) {

  }
}

function* getToken({ payload, url }) {
  try {
    const { data } = yield call(fetchData, {
      url: '/user/refresh',
      method: "get",
    })
    localStorage.setItem('token', data.accessToken);
    console.log(data);
    yield put(successAddUser(data))
    
  } catch (error) {

  }
}

export function* userSaga() {
  yield takeEvery(REQUEST_GET_ALL_USER, getAllUsers);
  yield takeEvery(REQUEST_ADD_USER, addUser);
  yield takeEvery(REQUEST_ADD_TOKEN, getToken)
}
