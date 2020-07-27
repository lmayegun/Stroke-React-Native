import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getContent({payload}){
  const { contentId } = payload;

  try{
    const request = yield axios
                          .get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/${contentId}` )
                            .then((response) => {
                              return response.data
                            });
    yield put({ type: 'GET_CONTENT_SUCCESS', payload: request.post });
  } catch (error){
    yield put({ type: 'GET_CONTENT_FAILED', payload:'failed' });
  }
}

function* getContentNews(){
  try{
    const request = yield axios.get('https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/').then((response) => {
        return response.data
      }
    );
    console.log(request, "news");
    yield put({ type: 'GET_ALL_NEWS_SUCCESS', payload: request.reverse() });
  } catch (error){
    yield put({ type: 'GET_ALL_NEWS_FAIL', payload:'failed' });
  }
}

function* getVideos(){
  try{
    const request = yield axios.get('/api/contents-app/videos').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'GET_VIDEOS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'GET_VIDEOS_FAILED', payload:'failed' });
  }
}

function* getVideo(payload){
  try{
    const request = yield axios.get('/api/contents-app/video', {
                                        params:payload.payload
                                      })
                                      .then((response) => {
                                        return response.data
                                      });
    yield put({ type: 'GET_VIDEO_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'GET_VIDEO_FAILED', payload:'failed' });
  }
}

export const contentsSagas = [
  takeLatest('GET_ALL_NEWS', getContentNews),
  takeLatest('GET_CONTENT', getContent),
  takeLatest('GET_ALL_VIDEOS', getVideos),
  takeLatest('GET_VIDEO', getVideo),
]
