import { combineReducers } from 'redux';
import appSettings from './settings.reducer';
import news from './contents/news.reducer';

const createReducer = combineReducers({
    appSettings,
    news,
  });

export default createReducer
