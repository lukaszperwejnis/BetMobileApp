import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RouteName } from '@navigation';
import { useIsFocused } from '@react-navigation/native';
import { betService } from '@services';
import { GameStatus } from '@structures';
import { useTranslation } from '@hooks';
import {
  EmptyState,
  GameBetPreview,
  GameItemDivider,
  Submit,
  TeamCrest,
} from '@components';
import {
  ChampionContainer,
  ChampionName,
  Section,
  SectionDivider,
  SectionName,
  StyledCustomPage,
  StyledList,
} from './styles';

type GameBetItem = {
  _id: string;
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

export interface ActiveBetsProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.ActiveBets>;
}

export const ActiveBets = ({ navigation }: ActiveBetsProps): JSX.Element => {
  const isFocused = useIsFocused();
  const translate = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [championBet, setChampionBet] = useState<null | any>(null);
  const [gameBets, setGameBets] = useState<GameBetItem[]>([]);
  const hasNoActiveBets = !isLoading && !championBet && !gameBets.length;

  const fetchActiveBets = async () => {
    const result = await betService.getUserBets({
      status: GameStatus.Scheduled,
    });

    const mappedGameBets = result.data.gameBets.map((gameBet: any) => ({
      _id: gameBet._id,
      homeTeam: {
        name: gameBet.game.homeTeam.name,
        score: gameBet.homeScore,
      },
      awayTeam: {
        name: gameBet.game.awayTeam.name,
        score: gameBet.awayScore,
      },
      scheduledDate: gameBet.game.scheduledDate,
    }));

    setGameBets(mappedGameBets);
    setChampionBet(result.data.championBet);

    setIsLoading(false);
  };

  const goToAvailableBets = (): void =>
    navigation.navigate(RouteName.AvailableBets);

  useEffect(() => {
    fetchActiveBets();
  }, [isFocused]);

  return (
    <StyledCustomPage isLoading={isLoading} withSpacingAround={false}>
      {hasNoActiveBets && (
        <EmptyState
          text={translate('pages.activeBets.emptyState')}
          icon="emoticon-sad-outline">
          <Submit
            title={translate('pages.activeBets.cta.goToActivePage')}
            onPress={goToAvailableBets}
          />
        </EmptyState>
      )}
      {!hasNoActiveBets && (
        <>
          {Boolean(championBet) && (
            <Section>
              <SectionName>
                {translate('pages.activeBets.championBet')}
              </SectionName>
              <ChampionContainer>
                <ChampionName>{championBet.bet.name}</ChampionName>
                <TeamCrest teamName={championBet.bet.name} />
              </ChampionContainer>
            </Section>
          )}
          {Boolean(gameBets.length) && Boolean(championBet) && (
            <SectionDivider />
          )}
          {Boolean(gameBets.length) && (
            <Section>
              <SectionName>
                {translate('pages.activeBets.gameBets')}
              </SectionName>
              <StyledList
                hasFullHeight={!championBet}
                keyExtractor={({ _id }: any) => _id}
                data={gameBets}
                renderItem={({ item, index }: any) => (
                  <>
                    {index !== 0 && <GameItemDivider />}
                    <GameBetPreview
                      homeTeam={item.homeTeam}
                      awayTeam={item.awayTeam}
                      scheduledDate={item.scheduledDate}
                    />
                  </>
                )}
              />
            </Section>
          )}
        </>
      )}
    </StyledCustomPage>
  );
};
