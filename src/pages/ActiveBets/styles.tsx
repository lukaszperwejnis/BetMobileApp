import styled from 'styled-components/native';
import { CustomPage } from '@components';
import { stylesConfig } from '@styles';

export const StyledCustomPage = styled(CustomPage)`
  padding-top: 100px;
`;

export const Section = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SectionDivider = styled.View`
  border-top-width: 3px;
  border-style: solid;
  border-top-color: ${stylesConfig.color.textColor};
  margin-top: ${stylesConfig.spacing.big};
  margin-bottom: ${stylesConfig.spacing.big};
`;

export const SectionName = styled.Text`
  font-size: ${stylesConfig.fontSize.large};
  color: ${stylesConfig.color.textColor};
  margin-bottom: ${stylesConfig.spacing.normal};
  text-align: center;
`;

export const ChampionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChampionName = styled.Text`
  font-size: ${stylesConfig.fontSize.normal};
  color: ${stylesConfig.color.textColor};
  margin-right: ${stylesConfig.spacing.large};
`;

export const StyledList = styled.FlatList`
  height: 100%;
  width: 90%;
`;
