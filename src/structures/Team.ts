import { CreationType } from './CreationType';

export interface Team {
  readonly _id: string;
  readonly creationType: CreationType;
  readonly name: string;
  readonly externalId: number;
}
