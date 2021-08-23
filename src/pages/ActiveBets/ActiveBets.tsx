import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Text } from 'react-native';
import { GameBetInput } from '@components';
import { betService } from '@services';
import { GameBet as GameBetType } from '@structures';
import { useTranslation } from '@hooks';
import { StyledCustomPage } from './styles';
import { GameStatus } from '../../structures/GameStatus';

export const ActiveBets = (): JSX.Element => {
  const translate = useTranslation();
  const [activeGameBets, setActiveGameBets] = useState<GameBetType[]>([]);
  // const [activeChampionBet, setActiveChampionBet] = useState<unknown[]>([]);

  const fetchActiveBets = () =>
    betService
      .getUserBets({ status: GameStatus.Scheduled })
      .then((result: any) => {
        setActiveGameBets(result.data.availableGames);
        setActiveGameBets(result.data.availableChampions);
      });

  useEffect(() => {
    fetchActiveBets();
  }, []);

  return (
    <StyledCustomPage>
      <Text>{translate('dashboard.header')}</Text>
      {/* {Boolean(activeGameBets.length) && ( */}
      {/*  <FlatList */}
      {/*    keyExtractor={({ _id }) => _id} */}
      {/*    data={activeGameBets} */}
      {/*    renderItem={({ item }) => ( */}
      {/*      <GameBetItem */}
      {/*        gameBet={item} */}
      {/*        onConfirm={onConfirmBet} */}
      {/*        onEdit={onEditBet} */}
      {/*        confirmed={Boolean(gameBets[item._id])} */}
      {/*      /> */}
      {/*    )} */}
      {/*  /> */}
      {/* )} */}
    </StyledCustomPage>
  );
};
