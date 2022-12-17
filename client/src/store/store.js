import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga'

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);
