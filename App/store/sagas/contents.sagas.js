import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getContent(payload){
  try{
    const request = yield axios.get('/api/contents-app/content', {
                                        params:payload.payload
                                      })
                                      .then((response) => {
                                        return response.data
                                      });
    yield put({ type: 'GET_CONTENT_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'GET_CONTENT_SUCCESS', payload:'failed' });
  }
}

function* getContentNews(){
  try{
    const request = yield axios.get('/api/contents-app/contents').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'GET_ALL_NEWS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'GET_ALL_NEWS_SUCCESS', payload:'failed' });
  }
}

export const contentsSagas = [
  takeLatest('GET_ALL_NEWS', getContentNews),
  takeLatest('GET_CONTENT', getContent),
]
