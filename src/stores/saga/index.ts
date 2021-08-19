import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth.saga';
import { passwordSaga } from './password.saga';

export function* rootSaga(): any {
  yield all([fork(authSaga), fork(passwordSaga)]);
}
