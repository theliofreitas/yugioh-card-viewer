import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import cards from './reducers/cards';
import rootSaga from './sagas/cards';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cards,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
