import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createReducer from './reducers';
// import {dispatch} from 'react-redux';


const store = createStore(
  createReducer,
  applyMiddleware(logger)
);

store.dispatch({type: "TEXT",
                payload:{
                  LostFrequency: "love you",
                  Avicici: "Heaven",
                  ColdPlay: "Like I love you"
                }
})

store.dispatch({type: "NEWS",
                payload:{
                  title: "Aphasia",
                  body: "Chunky",
                  date: "199106"
                }
})

export default store;
