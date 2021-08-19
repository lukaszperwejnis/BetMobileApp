import styled from 'styled-components/native';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

export const Label = styled.Text<WithChildrenProps>`
  margin-bottom: ${stylesConfig.spacing.small};
  font-size: ${stylesConfig.fontSize.normal};
  color: ${stylesConfig.color.textColor};
  font-weight: ${stylesConfig.fontWeight.bold};
  font-family: ${stylesConfig.fontFamily.primary};
`;
