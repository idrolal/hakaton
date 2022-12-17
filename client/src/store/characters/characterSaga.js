import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_CHARACTER } from '../api/character.api';
import { fetchData } from '../api/requestApi';
import { successGetAllCharacter } from './character.actions';
import { REQUEST_GET_ALL_CHARACTER } from './character.type';


function* getAllCharacter({ payload }) {
  try {
    const { data } = yield call(fetchData, {
      url: GET_CHARACTER,
    })

    yield put(successGetAllCharacter(data))
  } catch (error) {
    console.log(error)
  }
}


export function* characterSaga() {
  yield takeEvery(REQUEST_GET_ALL_CHARACTER, getAllCharacter);
}