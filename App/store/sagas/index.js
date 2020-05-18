import { all } from 'redux-saga/effects';
import { contentsSagas } from './contents.sagas';
import { authSagas } from './auth.sagas';
export default function* APPsagas(){
  yield all([
    ...contentsSagas,
    ...authSagas,
  ])
}
