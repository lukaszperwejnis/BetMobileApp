import { combineReducers } from 'redux';
import { messageReducer } from './message.reducer';
import { authReducer } from './auth.reducer';
import { passwordReducer } from './password.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  password: passwordReducer,
});
