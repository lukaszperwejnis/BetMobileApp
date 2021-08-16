import { User } from './User';

export namespace Signin {
  export type Payload = {
    email: string;
    password: string;
  };

  export type Success = {
    accessToken: string;
    refreshToken: string;
    user: User.DTO;
  };
}
