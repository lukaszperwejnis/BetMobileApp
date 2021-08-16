import { AuthActionType, AuthStoreType } from '../types';
import { AuthActions } from '../actions';

const initialState: AuthStoreType = {
  error: '',
  isLoading: false,
  currentUser: null,
  hasInvalidToken: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActions,
): AuthStoreType => {
  switch (action.type) {
    case AuthActionType.Login:
      return {
        ...state,
        isLoading: true,
        hasInvalidToken: false,
        error: '',
      };
    case AuthActionType.SuccessLogin:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionType.FailedLogin:
      return {
        ...state,
        error: action.payload as string,
        isLoading: false,
      };
    case AuthActionType.Signup:
      return {
        ...state,
        isLoading: true,
        hasInvalidToken: false,
        error: '',
      };
    case AuthActionType.SuccessSignup:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionType.FailedSignup:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionType.InvalidTokenSignup:
      return {
        ...state,
        hasInvalidToken: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
