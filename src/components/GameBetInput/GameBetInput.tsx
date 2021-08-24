import React, { useState } from 'react';
import dayjs from 'dayjs';
import { GameBet as GameBetType } from '@structures';
import { useTranslation } from '@hooks';
import { TeamCrest } from '@components';
import {
  Container,
  ScheduledDate,
  DetailsContainer,
  InputContainer,
  HomeTeam,
  AwayTeam,
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
  const [homeScore, setHomeScore] = useState<string>('');
  const [awayScore, setAwayScore] = useState<string>('');

  const { scheduledDate, homeTeam, awayTeam } = gameBet;

  const onHomeScoreChange = (score: string) => setHomeScore(score);
  const onAwayScoreChange = (score: string) => setAwayScore(score);

  const onBetConfirm = () =>
    onConfirm({
      gameId: gameBet._id,
      homeScore: +homeScore,
      awayScore: +awayScore,
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
        <HomeTeam isSelected={homeScore > awayScore}>{homeTeam.name}</HomeTeam>
        <TeamCrest teamName={homeTeam.name} />
        <InputContainer>
          <ScoreInput
            value={homeScore}
            onChangeText={onHomeScoreChange}
            editable={!confirmed}
          />
          <Separator>:</Separator>
          <ScoreInput
            value={awayScore}
            onChangeText={onAwayScoreChange}
            editable={!confirmed}
          />
        </InputContainer>
        <TeamCrest teamName={awayTeam.name} />
        <AwayTeam isSelected={awayScore > homeScore}>{awayTeam.name}</AwayTeam>
      </DetailsContainer>
      <Confirm
        disabled={!homeScore || !awayScore}
        title={translate(`gameBet.cta.${confirmed ? 'edit' : 'add'}`)}
        onPress={confirmed ? onBetEdit : onBetConfirm}
        confirmed={confirmed}
      />
    </Container>
  );
};
