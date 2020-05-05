import { combineReducers } from 'redux';
import appSettings from './settings.reducer';
import news from './content/news.reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    appSettings,
    news,
    ...asyncReducers
  });

export default createReducer
