import { Team } from './Team';
import { GameStatus } from './GameStatus';
import { GameStage } from './GameStage';
import { CreationType } from './CreationType';
import { Competition } from './Competition';

export interface Bet {
  readonly awayScore: number;
  readonly awayTeam: Team;
  readonly competition: Competition;
  readonly createdAt: string;
  readonly creationType: CreationType;
  readonly externalId: number;
  readonly homeScore: number;
  readonly homeTeam: Team;
  readonly scheduledDate: string;
  readonly stage: GameStage;
  readonly status: GameStatus;
  readonly updatedAt: string;
  readonly winner: Team;
}
