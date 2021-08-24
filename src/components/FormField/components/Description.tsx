import styled from 'styled-components/native';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

export const Description = styled.Text<WithChildrenProps>`
  color: ${stylesConfig.color.textColor};
  font-size: ${stylesConfig.fontSize.small};
  margin: ${stylesConfig.spacing.small} 0;
`;
