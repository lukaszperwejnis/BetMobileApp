import styled from 'styled-components/native';
import { stylesConfig } from '@styles';

export const Container = styled.View`
  padding-right: 30px;
  padding-left: 30px;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: ${stylesConfig.fontSize.large};
  color: ${stylesConfig.color.textColor};
  text-align: center;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  margin-top: ${stylesConfig.spacing.big};
`;
