import { Message } from '@structures';
import { MessageActions } from '../actions';
import { MessageActionType, MessageStoreType } from '../types';

const initialState: MessageStoreType = [];

export function messageReducer(
  state = initialState,
  { type, payload }: MessageActions,
): MessageStoreType {
  switch (type) {
    case MessageActionType.MountMessage:
      return [...state, payload as Message.Message];
    case MessageActionType.UnmountMessage:
      return state.filter((message) => message.key !== payload.key);
    default:
      return state;
  }
}
