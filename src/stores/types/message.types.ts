import { Message } from '@structures';

export enum MessageActionType {
  MountMessage = 'MOUNT_MESSAGE',
  UnmountMessage = 'UNMOUNT_MESSAGE',
}

export type MessageStoreType = Message.Message[];
