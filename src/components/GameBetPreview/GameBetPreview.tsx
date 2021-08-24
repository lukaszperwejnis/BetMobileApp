import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from '@hooks';
import {
  Container,
  ScheduledDate,
  DetailsContainer,
  HomeTeam,
  AwayTeam,
  InputContainer,
  Separator,
} from '../GameBetInput/styles';
import { TeamCrest } from '../TeamCrest';
import { Score } from './styles';

type GameBetPreviewProps = {
  homeTeam: {
    score: number;
    name: string;
  };
  awayTeam: {
    score: number;
    name: string;
  };
  scheduledDate: string;
};

export const GameBetPreview = ({
  homeTeam,
  awayTeam,
  scheduledDate,
}: GameBetPreviewProps): JSX.Element => {
  const translate = useTranslation();
  const formatDate = (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm');
  return (
    <Container>
      <ScheduledDate>
        {translate('gameBet.scheduledDate', {
          scheduledDate: formatDate(scheduledDate),
        })}
      </ScheduledDate>
      <DetailsContainer>
        <HomeTeam isSelected={homeTeam.score > awayTeam.score}>
          {homeTeam.name}
        </HomeTeam>
        <TeamCrest teamName={homeTeam.name} />
        <InputContainer>
          <Score>{homeTeam.score}</Score>
          <Separator>:</Separator>
          <Score>{awayTeam.score}</Score>
        </InputContainer>
        <TeamCrest teamName={awayTeam.name} />
        <AwayTeam isSelected={awayTeam.score > homeTeam.score}>
          {awayTeam.name}
        </AwayTeam>
      </DetailsContainer>
    </Container>
  );
};
