import styled from 'styled-components/native';
import { stylesConfig } from '@styles';
import { WithChildrenProps } from '@structures';

export const Title = styled.Text`
  text-align: center;
  font-size: ${stylesConfig.fontSize.large};
  color: ${stylesConfig.color.textColor};
  font-weight: ${stylesConfig.fontWeight.bold};
  font-family: ${stylesConfig.fontFamily.primary};
  margin-bottom: ${stylesConfig.spacing.big};
`;

export const Description = styled.View<WithChildrenProps>`
  width: 80%;
  text-align: center;
`;
