import { ApiError } from '@structures';
import { PasswordActionType } from '../types';

interface Action<T> {
  type: PasswordActionType;
  payload: T;
}

export const startReset = <T>(payload: T): Action<T> =>
  ({
    type: PasswordActionType.StartReset,
    payload,
  } as const);

export const successStartReset = (): Action<null> =>
  ({
    type: PasswordActionType.SuccessStartReset,
    payload: null,
  } as const);

export const failedStartReset = (payload: ApiError): Action<ApiError> =>
  ({
    type: PasswordActionType.FailedStartReset,
    payload,
  } as const);

export const reset = <T>(payload: T): Action<T> =>
  ({
    type: PasswordActionType.Reset,
    payload,
  } as const);

export const successReset = (): Action<null> =>
  ({
    type: PasswordActionType.SuccessReset,
    payload: null,
  } as const);

export const failedReset = (payload: ApiError): Action<ApiError> =>
  ({
    type: PasswordActionType.FailedReset,
    payload,
  } as const);

export const invalidTokenReset = (): Action<boolean> =>
  ({
    type: PasswordActionType.InvalidTokenReset,
    payload: true,
  } as const);

export type PasswordActions =
  | ReturnType<typeof startReset>
  | ReturnType<typeof successStartReset>
  | ReturnType<typeof failedStartReset>
  | ReturnType<typeof reset>
  | ReturnType<typeof successReset>
  | ReturnType<typeof failedReset>
  | ReturnType<typeof invalidTokenReset>;
