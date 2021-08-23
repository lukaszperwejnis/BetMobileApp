import React, { useState } from 'react';
import dayjs from 'dayjs';
import { GameBet as GameBetType } from '@structures';
import { useTranslation } from '@hooks';
import { crests } from '@assets/crests';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { normalize } from '@utils';
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

function getCrest(teamName: string): JSX.Element {
  const parsedTeamName = normalize(teamName).replaceAll(' ', '');
  const HomeCrest = crests[parsedTeamName];
  console.log(crests, parsedTeamName);
  if (HomeCrest) {
    // eslint-disable-next-line react/jsx-pascal-case
    return <HomeCrest.default width={50} height={50} />;
  }
  return <MaterialCommunityIcons name="soccer" size={50} />;
}

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
        {getCrest(homeTeam.name)}
        <InputContainer>
          <ScoreInput onChangeText={onHomeScoreChange} />
          <Separator>:</Separator>
          <ScoreInput onChangeText={onAwayScoreChange} />
        </InputContainer>
        {getCrest(awayTeam.name)}
        <TeamName isSelected={awayScore > homeScore}>{awayTeam.name}</TeamName>
      </DetailsContainer>
      <Confirm
        title={translate(`gameBet.cta.${confirmed ? 'edit' : 'add'}`)}
        onPress={confirmed ? onBetEdit : onBetConfirm}
      />
    </Container>
  );
};
