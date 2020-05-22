import { combineReducers } from 'redux';
import appSettings from './settings.reducer';
import news from './contents/news.reducer';
import content from './contents/content.reducer';
import videos from './contents/videos.reducer';
import auth from './auth/auth.reducer';

const createReducer = combineReducers({
    appSettings,
    news,
    content,
    videos,
    auth
  });

export default createReducer
