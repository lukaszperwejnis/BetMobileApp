import { WithError, WithLoading, WithTokenValidation } from '@structures';
import { User } from '@bet/structures';

export interface AuthStoreType
  extends WithError,
    WithLoading,
    WithTokenValidation {
  currentUser: User.DTO | null;
}

export enum AuthActionType {
  Login = 'LOGIN',
  SuccessLogin = 'SUCCESS_LOGIN',
  FailedLogin = 'FAILED_LOGIN',
  Signup = 'SIGNUP',
  SuccessSignup = 'SUCCESS_SIGNUP',
  FailedSignup = 'FAILED_SIGNUP',
  InvalidTokenSignup = 'INVALID_TOKEN_SIGNUP',
}
