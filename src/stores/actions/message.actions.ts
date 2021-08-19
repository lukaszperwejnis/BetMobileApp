import { Message } from '@structures';
import { MessageActionType } from '../types';
import { rootStore } from '../index';

interface Action<T> {
  type: MessageActionType;
  payload: T;
}

type UnmountMessagePayload = {
  key: string;
};

export const mountMessage = (
  payload: Message.Message,
): Action<Message.Message> =>
  ({
    type: MessageActionType.MountMessage,
    payload,
  } as const);

export const unmountMessage = (
  payload: UnmountMessagePayload,
): Action<UnmountMessagePayload> =>
  ({
    type: MessageActionType.UnmountMessage,
    payload,
  } as const);

export type MessageActions =
  | ReturnType<typeof mountMessage>
  | ReturnType<typeof unmountMessage>;

function message(type: Message.Type, text: string, duration = 3) {
  const key = new Date().getTime().toString(10);
  rootStore.dispatch(
    mountMessage({
      key,
      type,
      text,
      duration,
    }),
  );
  setTimeout(() => {
    rootStore.dispatch(
      unmountMessage({
        key,
      }),
    );
  }, duration * 1000);
}
export const messageActions = {
  success: message.bind(this, Message.Type.Success),
  error: message.bind(this, Message.Type.Error),
  warning: message.bind(this, Message.Type.Warning),
  info: message.bind(this, Message.Type.Info),
};
