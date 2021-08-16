import { WithError, WithLoading, WithTokenValidation } from '@structures';

export interface PasswordStoreType
  extends WithError,
    WithLoading,
    WithTokenValidation {
  isSuccess: boolean;
}

export enum PasswordActionType {
  StartReset = 'START_RESET_PASSWORD',
  SuccessStartReset = 'SUCCESS_START_RESET_PASSWORD',
  FailedStartReset = 'FAILED_START_RESET_PASSWORD',
  Reset = 'RESET_PASSWORD',
  SuccessReset = 'SUCCESS_RESET_PASSWORD',
  FailedReset = 'FAILED_RESET_PASSWORD',
  UpdatePassword = 'UPDATE_PASSWORD',
  SuccessUpdatePassword = 'SUCCESS_UPDATE_PASSWORD',
  FailedUpdatePassword = 'FAILED_UPDATE_PASSWORD',
  InvalidTokenReset = 'INVALID_TOKEN_RESET',
}
