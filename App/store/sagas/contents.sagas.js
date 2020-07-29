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

function* getContents({ payload }){

  const category = !!payload.category ? payload.category : undefined; 
  

  try{
    let request;
    if ( category ){
      request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/?category=${category}`).then((response) => {
        return response.data
      });
    } else {
      request = yield axios.get('https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/').then((response) => {
        return response.data
      });  
    }

    yield put({ type: 'GET_ALL_NEWS_SUCCESS', payload: request.reverse() });
  } catch (error){
    yield put({ type: 'GET_ALL_NEWS_FAIL', payload:'failed' });
  }
}

function* getContentsByTypes({ payload }){

  const category = !!payload.category ? payload.category : undefined; 

  try{
    let request;
    if ( category ){
      request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/?category=${category}`).then((response) => {
        return response.data
      });
    } else {
      request = yield axios.get('https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/').then((response) => {
        return response.data
      });  
    }

    yield put({ type: 'GET_CONTENTS_TYPE_SUCCESS', payload: request.reverse() });
  } catch (error){
    yield put({ type: 'GET_CONTENTS_TYPE_FAIL', payload:'failed' });
  }
}

function* getEvents({ payload }){

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/posts/?category=events`)
                                .then((response) => {
                                  return response.data
                                });

    yield put({ type: 'GET_EVENTS_SUCCESS', payload: request.reverse() });
  } catch (error){
    yield put({ type: 'GET_EVENTS_FAIL', payload:'failed' });
  }
}

function* getVideos(){
  try{
    const request = yield axios.get('https://d8-recruiter-rest-simulator.herokuapp.com/api/videos/').then((response) => {
        return response.data
      }
    );
    yield put({ type: 'GET_VIDEOS_SUCCESS', payload:request });
  } catch (error){
    yield put({ type: 'GET_VIDEOS_FAILED', payload:'failed' });
  }
}

function* getVideo({payload}){

  const { videoId } = payload;

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/videos/${videoId}`)
                                      .then((response) => {
                                        return response.data
                                      });

    yield put({ type: 'GET_VIDEO_SUCCESS', payload:request.video });
  } catch (error){
    yield put({ type: 'GET_VIDEO_FAILED', payload:'failed' });
  }
}

export const contentsSagas = [
  takeLatest('GET_CONTENTS', getContents),
  takeLatest('GET_CONTENTS_BY_TYPES', getContentsByTypes),
  takeLatest('GET_EVENTS', getEvents),
  takeLatest('GET_CONTENT', getContent),
  takeLatest('GET_ALL_VIDEOS', getVideos),
  takeLatest('GET_VIDEO', getVideo),
]
