import { PasswordActionType, PasswordStoreType } from '../types';
import { PasswordActions } from '../actions';

const initialState: PasswordStoreType = {
  error: '',
  isLoading: false,
  isSuccess: false,
  hasInvalidToken: false,
};

export const passwordReducer = (
  state = initialState,
  action: PasswordActions,
): PasswordStoreType => {
  switch (action.type) {
    case PasswordActionType.StartReset:
      return {
        ...state,
        isLoading: true,
        hasInvalidToken: false,
        error: '',
      };
    case PasswordActionType.SuccessStartReset:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case PasswordActionType.FailedStartReset:
      return {
        ...state,
        error: action.payload as string,
        isLoading: false,
      };
    case PasswordActionType.InvalidTokenReset:
      return {
        ...state,
        hasInvalidToken: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
