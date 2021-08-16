import { URLS } from '@constants';
import { ApiService } from './ApiService/ApiService';

class PasswordService extends ApiService {
  startReset = async <T>(payload: { email: string }): Promise<T> =>
    this.post(URLS.USER.START_RESET_PASSWORD, {
      payload,
    });

  reset = async <T>(data: { token: string; password: string }): Promise<T> =>
    this.post(URLS.USER.RESET_PASSWORD, { payload: { ...data } });
}

export const passwordService = new PasswordService();
