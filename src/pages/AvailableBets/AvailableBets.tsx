import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text } from 'react-native';
import { GameBetInput, StyledModalSelector } from '@components';
import { betService } from '@services';
import { GameBet as GameBetType, GameStatus } from '@structures';
import { useTranslation } from '@hooks';
import { StyledCustomPage } from './styles';

type GameBetInput = {
  gameId: string;
  homeScore: number;
  awayScore: number;
};

export const AvailableBets = (): JSX.Element => {
  const translate = useTranslation();
  const [availableGameBets, setAvailableGameBets] = useState<GameBetType[]>([]);
  const [availableChampionBets, setAvailableChampionBets] = useState<
    { key: string; label: string }[]
  >([]);

  const [gameBets, setGameBets] = useState<{
    [key: string]: GameBetInput;
  }>({});

  const [championBet, setChampionBet] = useState<{ teamId: string } | null>(
    null,
  );

  const hasAnyBets = Boolean(Object.keys(gameBets) || championBet);

  const onChampionBetChange = ({ key }: { key: string; label: string }) =>
    setChampionBet({ teamId: key });

  const fetchAvailableBets = () =>
    betService.getBets({ status: GameStatus.Scheduled }).then((result: any) => {
      setAvailableGameBets(result.data.availableGames);
      setAvailableChampionBets(
        result.data.availableChampions.map(
          ({ _id, name }: { _id: string; name: string }) => ({
            key: _id,
            label: name,
          }),
        ),
      );
    });

  useEffect(() => {
    fetchAvailableBets();
  }, []);

  const createBets = () => {
    if (!hasAnyBets) {
      return;
    }

    betService.createBets({
      games: Object.keys(gameBets).length ? Object.values(gameBets) : undefined,
      champion: championBet || undefined,
    });
  };

  const onConfirmBet = (gameBet: GameBetInput) => {
    setGameBets({ ...gameBets, [gameBet.gameId]: gameBet });
  };

  const onEditBet = (gameId: string) => {
    const bets = {
      ...gameBets,
    };

    delete bets[gameId];
    setGameBets(bets);
  };

  return (
    <StyledCustomPage>
      <Text>{translate('dashboard.header')}</Text>
      <Button
        title={translate('dashboard.cta')}
        onPress={createBets}
        disabled={!hasAnyBets}
      />
      <StyledModalSelector
        initValue={translate('dashboard.championBet.initialValue')}
        data={availableChampionBets}
        onChange={onChampionBetChange as any}
      />
      <FlatList
        keyExtractor={({ _id }) => _id}
        data={availableGameBets}
        renderItem={({ item }) => (
          <GameBetInput
            gameBet={item}
            onConfirm={onConfirmBet}
            onEdit={onEditBet}
            confirmed={Boolean(gameBets[item._id])}
          />
        )}
      />
    </StyledCustomPage>
  );
};
