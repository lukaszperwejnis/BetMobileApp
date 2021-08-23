import React, { useState } from 'react';
import dayjs from 'dayjs';
import { GameBet as GameBetType } from '@structures';
import { useTranslation } from '@hooks';
import {
  Container,
  ScheduledDate,
  DetailsContainer,
  InputContainer,
  TeamName,
  ScoreInput,
  Separator,
  Confirm,
} from './styles';

type GameBetProps = {
  gameBet: GameBetType;
  onConfirm: (gameBet: GameBet) => void;
  onEdit: (id: string) => void;
  confirmed: boolean;
};

type GameBet = {
  gameId: string;
  homeScore: number;
  awayScore: number;
};

export const GameBetInput = ({
  gameBet,
  onConfirm,
  onEdit,
  confirmed,
}: GameBetProps): JSX.Element => {
  const translate = useTranslation();
  const [homeScore, setHomeScore] = useState<number>(0);
  const [awayScore, setAwayScore] = useState<number>(0);

  const { scheduledDate, homeTeam, awayTeam } = gameBet;

  const onHomeScoreChange = (score: string) => setHomeScore(+score);
  const onAwayScoreChange = (score: string) => setAwayScore(+score);

  const onBetConfirm = () =>
    onConfirm({
      gameId: gameBet._id,
      homeScore,
      awayScore,
    });

  const onBetEdit = () => onEdit(gameBet._id);

  const formatDate = (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm');

  return (
    <Container>
      <ScheduledDate>
        {translate('gameBet.scheduledDate', {
          scheduledDate: formatDate(scheduledDate),
        })}
      </ScheduledDate>
      <DetailsContainer>
        <TeamName isSelected={homeScore > awayScore}>{homeTeam.name}</TeamName>
        <InputContainer>
          <ScoreInput onChangeText={onHomeScoreChange} />
          <Separator>:</Separator>
          <ScoreInput onChangeText={onAwayScoreChange} />
        </InputContainer>
        <TeamName isSelected={awayScore > homeScore}>{awayTeam.name}</TeamName>
      </DetailsContainer>
      <Confirm
        title={translate(`gameBet.cta.${confirmed ? 'edit' : 'add'}`)}
        onPress={confirmed ? onBetEdit : onBetConfirm}
      />
    </Container>
  );
};
