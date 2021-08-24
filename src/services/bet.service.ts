import { URLS } from '@constants';
import { GameBet, GameStatus, Team } from '@structures';
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

type GetBetsSuccessResponse = {
  data: {
    availableGames: GameBet[];
    availableChampions: Team[];
  };
};

type GetUserBetsSuccessResponse = {
  data: {
    gameBets: any[];
    championBet: any;
  };
};

export class BetService extends ApiService {
  getBets = async ({
    status,
  }: UserBetsFilters): Promise<GetBetsSuccessResponse> =>
    this.get<GetBetsSuccessResponse>(`${URLS.BETS.GET}?status=${status}`, {
      authRequired: true,
    });

  getUserBets = async ({
    status,
  }: UserBetsFilters): Promise<GetUserBetsSuccessResponse> =>
    this.get(`${URLS.BETS.USER}?status=${status}`, {
      authRequired: true,
    });

  createBets = async (payload: CreateBetsPayload): Promise<unknown> =>
    this.post(URLS.BETS.CREATE, { payload, authRequired: true });
}

export const betService = new BetService();
