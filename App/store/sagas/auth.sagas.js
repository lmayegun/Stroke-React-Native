import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-ff413.cloudfunctions.net';

function* initLogin({payload}){
  const {phone} = payload.phone;
  const {code} = payload.code;

  const number = "+44"+phone;

  try{
    let { data } = yield axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
      phone:number, code:code
    });
    const result = firebase.auth().signInWithCustomToken(data.token);
    result.then(()=>{
      alert('yeah we are in')
    })
    yield put({
                type:'ONE_TIME_PASS_LOGIN_SUCCESS', 
                payload:{ auth:true, number, code }
              });
  }catch(e){
    alert(e)
  }
}


export const authSagas=[
  takeLatest('ONE_TIME_PASS_LOGIN', initLogin)
]
