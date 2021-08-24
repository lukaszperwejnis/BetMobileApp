// eslint-disable-next-line import/no-extraneous-dependencies
import { all, call, fork, takeLatest, put } from '@redux-saga/core/effects';
import {
  SuccessApiResponse,
  SagaParameter,
  Signin,
  Signup,
  User,
} from '@structures';
import { mapErrorToMessage, translate } from '@utils';
import { authService, tokenService, userService } from '@services';
import { navigate, RouteName } from '@navigation';
import {
  successLogin,
  failedLogin,
  failedSignup,
  invalidTokenSignup,
  successSignup,
} from '../actions/auth.actions';
import { AuthActionType } from '../types';
import { messageActions } from '../actions/message.actions';
import { AuthProvider } from '../../providers/AuthProvider';

type LoginAction = { payload: Signin.Payload };
type SignupAction = { payload: Signup.Payload };

function* login(action: SagaParameter<LoginAction>) {
  try {
    const { data } = (yield call(
      authService.login,
      action.payload,
    )) as SuccessApiResponse<Signin.Success>;

    const { user, ...tokens } = data;

    yield call(tokenService.setTokens, tokens);
    yield call(userService.setUser, user);
    AuthProvider.getInstance().notify();

    yield put(successLogin<User.DTO>(user));
    yield call(navigate as any, RouteName.Main);
  } catch (error) {
    console.error(error);
    const errorMessage = mapErrorToMessage(error);
    yield put(failedLogin(errorMessage));
    yield call(messageActions.error, errorMessage);
  }
}

function* signup(action: SagaParameter<SignupAction>) {
  try {
    yield call(authService.signup, action.payload);
    yield call(messageActions.success, translate('pages.signup.success'));
    yield put(successSignup());
    yield call(navigate as any, RouteName.Login);
  } catch (error) {
    if (tokenService.isInvalidTokenError(error.response.data)) {
      yield put(invalidTokenSignup());
      return;
    }

    const errorMessage = mapErrorToMessage(error);
    yield put(failedSignup(errorMessage));
    yield call(messageActions.error, errorMessage);
  }
}

function* watchLogin(): unknown {
  yield takeLatest(AuthActionType.Login, login);
}

function* watchSignup(): unknown {
  yield takeLatest(AuthActionType.Signup, signup);
}

export function* authSaga(): unknown {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
