import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getContentNews(payload){
  try{
    const request = yield axios.get('/api/e-commerce-app/products').then((response) => {
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
]
