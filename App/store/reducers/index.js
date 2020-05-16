import { combineReducers } from 'redux';
import appSettings from './settings.reducer';
import news from './contents/news.reducer';
import content from './contents/content.reducer';

const createReducer = combineReducers({
    appSettings,
    news,
    content
  });

export default createReducer
