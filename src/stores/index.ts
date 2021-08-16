import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { MessageStoreType, AuthStoreType, PasswordStoreType } from './types';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export type StoreType = {
  messages: MessageStoreType;
  auth: AuthStoreType;
  password: PasswordStoreType;
};
