import { URLS } from '@constants';
import { ApiService } from './ApiService/ApiService';

export class BetService extends ApiService {
  getAvailableBets = async <T>(): Promise<T> =>
    this.get<T>(URLS.BET.AVAILABLE, { authRequired: true });

  getUserBets = async (): Promise<unknown> =>
    this.get(URLS.BET.USER, { authRequired: true });

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  createBets = async (payload: any) =>
    this.post(URLS.BET.CREATE, { payload, authRequired: true });
}

export const betService = new BetService();
