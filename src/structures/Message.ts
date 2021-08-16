export namespace Message {
  export type Message = {
    key: number;
    text: string;
    duration: number;
    type: Type;
  };

  export enum Type {
    Success = 'SUCCESS',
    Error = 'ERROR',
    Warning = 'WARNING',
    Info = 'INFO',
  }
}
