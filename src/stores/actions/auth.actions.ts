import { ApiError } from '@structures';
import { AuthActionType } from '../types';

interface Action<T> {
  type: AuthActionType;
  payload: T;
}

export const login = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.Login,
    payload,
  } as const);

export const successLogin = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.SuccessLogin,
    payload,
  } as const);

export const failedLogin = (payload: ApiError): Action<ApiError> =>
  ({
    type: AuthActionType.FailedLogin,
    payload,
  } as const);

export const signup = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.Signup,
    payload,
  } as const);

export const successSignup = (): Action<null> =>
  ({
    type: AuthActionType.SuccessSignup,
    payload: null,
  } as const);

export const failedSignup = (payload: ApiError): Action<ApiError> =>
  ({
    type: AuthActionType.FailedSignup,
    payload,
  } as const);

export const invalidTokenSignup = (): Action<boolean> =>
  ({
    type: AuthActionType.InvalidTokenSignup,
    payload: true,
  } as const);

export type AuthActions =
  | ReturnType<typeof login>
  | ReturnType<typeof successLogin>
  | ReturnType<typeof failedLogin>
  | ReturnType<typeof signup>
  | ReturnType<typeof successSignup>
  | ReturnType<typeof failedSignup>
  | ReturnType<typeof invalidTokenSignup>;
