import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import auth from '../../services/firebase';

const ROOT_URL = 'https://us-central1-one-time-password-ff413.cloudfunctions.net';

function* initLogin({payload}){
  const {phone, code} = payload;

  const number = "+44"+phone;

  try{
    let { data } = yield axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
      phone:number, code:code
    });
    const result = auth.signInWithCustomToken(data.token);
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

function* initCreateAccount({payload}){
  alert("Creating account");
}


export const authSagas=[
  takeLatest('ONE_TIME_PASS_LOGIN', initLogin),
  takeLatest('ONE_TIME_PASS_ACC', initCreateAccount)
]
