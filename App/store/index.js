import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import APPsagas from './sagas';
// import {dispatch} from 'react-redux';

const sagaMiddeleware = createSagaMiddleware()

const store = createStore(
  createReducer,
  applyMiddleware(logger, sagaMiddeleware),
);

store.subscribe(()=>{
  // console.log(store.getState(), 'hh')
})

sagaMiddeleware.run(APPsagas);

export default store;
