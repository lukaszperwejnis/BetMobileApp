export namespace User {
  export interface User {
    readonly _id: string;
    readonly profile: Profile;
    readonly email: string;
    readonly password: string;
    readonly is_admin: boolean;
    readonly score: number;
  }

  export interface Profile {
    first_name: string;
    last_name: string;
  }

  export type DTO = Omit<User, 'password'>;
}
