export namespace Signup {
  export type InvitationPayload = {
    email: string;
  };

  export type InvitationSuccess = boolean;

  export type Payload = {
    token: string;
    password: string;
  };

  export type Success = boolean;
}
