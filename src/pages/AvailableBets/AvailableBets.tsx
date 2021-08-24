import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  GameBetInput,
  StyledModalSelector,
  Submit,
  EmptyState,
  GameItemDivider,
} from '@components';
import { betService } from '@services';
import { GameBet as GameBetType, GameStatus } from '@structures';
import { useTranslation } from '@hooks';
import { RootStackParamList, RouteName } from '@navigation';
import { StyledCustomPage, StyledList, Wrapper } from './styles';

export interface AvailableBetsProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.AvailableBets>;
}

type GameBetInput = {
  gameId: string;
  homeScore: number;
  awayScore: number;
};

export const AvailableBets = ({
  navigation,
}: AvailableBetsProps): JSX.Element => {
  const translate = useTranslation();
  const [availableGameBets, setAvailableGameBets] = useState<GameBetType[]>([]);
  const [availableChampionBets, setAvailableChampionBets] = useState<
    { key: string; label: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [gameBets, setGameBets] = useState<{
    [key: string]: GameBetInput;
  }>({});

  const [championBet, setChampionBet] = useState<{ teamId: string } | null>(
    null,
  );

  const hasNoAvailableBets =
    !isLoading &&
    availableGameBets.length === 0 &&
    availableChampionBets.length === 0;

  const hasAnyBets = Boolean(Object.keys(gameBets).length || championBet);

  const onChampionBetChange = ({ key }: { key: string; label: string }) =>
    setChampionBet({ teamId: key });

  const fetchAvailableBets = async () => {
    const result = await betService.getBets({ status: GameStatus.Scheduled });
    const { availableGames, availableChampions } = result.data;

    setAvailableGameBets(availableGames);
    setAvailableChampionBets(
      availableChampions.map(
        ({ _id, name }: { _id: string; name: string }) => ({
          key: _id,
          label: name,
        }),
      ),
    );

    setIsLoading(false);
  };

  useEffect(() => {
    fetchAvailableBets();
  }, []);

  const createBets = async () => {
    if (!hasAnyBets) {
      return;
    }

    const response: any = await betService.createBets({
      games: Object.keys(gameBets).length ? Object.values(gameBets) : undefined,
      champion: championBet || undefined,
    });

    if (response.status === 200) {
      setIsLoading(true);
      setChampionBet(null);
      setGameBets({});
      fetchAvailableBets();
      navigation.navigate(RouteName.ActiveBets);
    }
  };

  const onConfirmBet = (gameBet: GameBetInput) => {
    setGameBets((prevGameBets) => ({
      ...prevGameBets,
      [gameBet.gameId]: gameBet,
    }));
  };

  const onEditBet = (gameId: string) => {
    const bets = {
      ...gameBets,
    };

    delete bets[gameId];
    setGameBets(bets);
  };

  return (
    <StyledCustomPage isLoading={isLoading} withSpacingAround={false}>
      {hasNoAvailableBets && (
        <EmptyState
          text={translate('pages.availableBets.emptyState')}
          icon="emoticon-sad-outline"
        />
      )}
      {!hasNoAvailableBets && (
        <>
          {Boolean(availableChampionBets.length) && (
            <Wrapper>
              <StyledModalSelector
                initValue={translate(
                  'pages.availableBets.championBet.initialValue',
                )}
                data={availableChampionBets}
                onChange={onChampionBetChange as any}
              />
            </Wrapper>
          )}

          {Boolean(availableGameBets.length) && (
            <StyledList
              keyExtractor={({ _id }: any) => _id}
              data={availableGameBets}
              renderItem={({ item, index }: any) => (
                <>
                  {index !== 0 && <GameItemDivider />}
                  <GameBetInput
                    gameBet={item}
                    onConfirm={onConfirmBet}
                    onEdit={onEditBet}
                    confirmed={Boolean(gameBets[item._id])}
                  />
                </>
              )}
            />
          )}
          {(Boolean(availableChampionBets.length) ||
            Boolean(availableGameBets.length)) && (
            <Wrapper>
              <Submit
                title={translate('pages.availableBets.cta')}
                onPress={createBets}
                disabled={!hasAnyBets}
              />
            </Wrapper>
          )}
        </>
      )}
    </StyledCustomPage>
  );
};
