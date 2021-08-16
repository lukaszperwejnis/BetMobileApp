export namespace Password {
  export type StartResetPayload = {
    email: string;
  };

  export type StartResetSuccess = boolean;

  export type ResetPayload = {
    token: string;
    password: string;
  };

  export type ResetSuccess = boolean;

  export type UpdatePasswordPayload = {
    userId: string;
    password: string;
  };

  export type UpdatePasswordSuccess = boolean;
}
