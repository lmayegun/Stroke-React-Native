import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import APPsagas from './sagas';

const sagaMiddeleware = createSagaMiddleware()

const store = createStore(
  createReducer,
  applyMiddleware(sagaMiddeleware),
);

store.subscribe(()=>{
  // console.log(store.getState())
})

sagaMiddeleware.run(APPsagas);

export default store;
