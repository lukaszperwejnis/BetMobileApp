import styled from 'styled-components/native';
import { stylesConfig } from '@styles';

export const GameItemDivider = styled.View`
  border-top-width: 3px;
  border-style: solid;
  border-top-color: ${stylesConfig.color.secondary};
  margin-top: ${stylesConfig.spacing.big};
  margin-bottom: ${stylesConfig.spacing.big};
`;
