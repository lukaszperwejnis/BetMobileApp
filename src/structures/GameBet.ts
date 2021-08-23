import { Team } from './Team';
import { Competition } from './Competition';
import { CreationType } from './CreationType';
import { GameStatus } from './GameStatus';

export type GameBet = {
  _id: string;
  awayScore: number | null;
  awayTeam: Team;
  competition: Competition;
  createdAt: string;
  creationType: CreationType;
  externalId: number;
  homeScore: number | null;
  homeTeam: Team;
  scheduledDate: string;
  stage: string;
  status: GameStatus;
  updatedAt: string;
  winner: Team | null;
};
