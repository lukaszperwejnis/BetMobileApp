import { URLS } from '@constants';
import { ApiService } from './ApiService/ApiService';

class AuthService extends ApiService {
  login = async <T>(payload: { email: string; password: string }): Promise<T> =>
    this.post<T>(URLS.USER.SIGNIN, { payload });

  signup = async <T>(payload: {
    token: string;
    password: string;
  }): Promise<T> => this.post(URLS.USER.SIGNUP, { payload });

  startResetPassword = async <T>(email: string): Promise<T> =>
    this.post(URLS.USER.START_RESET_PASSWORD, {
      payload: {
        email,
      },
    });

  resetPassword = async <T>(data: {
    token: string;
    password: string;
  }): Promise<T> =>
    this.post(URLS.USER.RESET_PASSWORD, { payload: { ...data } });

  validateInvitationToken = async <T>(token: string): Promise<T> =>
    this.get<T>(URLS.TOKENS.MAIL_INVITATION + token);
}

export const authService = new AuthService();
