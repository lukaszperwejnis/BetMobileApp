import { URLS } from '@constants';
import { GameStatus } from '@structures';
import { ApiService } from './ApiService/ApiService';

type UserBetsFilters = {
  status: GameStatus;
};

type CreateBetsPayload = {
  games?: {
    gameId: string;
    homeScore: number;
    awayScore: number;
  }[];
  champion?: { teamId: string };
};

export class BetService extends ApiService {
  getBets = async <T>({ status }: UserBetsFilters): Promise<T> =>
    this.get<T>(`${URLS.BETS.GET}?status=${status}`, {
      authRequired: true,
    });

  getUserBets = async ({ status }: UserBetsFilters): Promise<unknown> =>
    this.get(`${URLS.BETS.USER}?status=${status}`, {
      authRequired: true,
    });

  createBets = async (payload: CreateBetsPayload): Promise<unknown> =>
    this.post(URLS.BETS.CREATE, { payload, authRequired: true });
}

export const betService = new BetService();
