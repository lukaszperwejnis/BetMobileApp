import styled from 'styled-components/native';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

export const Error = styled.Text<WithChildrenProps>`
  margin-top: ${stylesConfig.spacing.extraSmall};
  font-size: ${stylesConfig.fontSize.small};
  color: ${stylesConfig.color.guardsmanRed};
`;
