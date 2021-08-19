import styled from 'styled-components/native';
import { stylesConfig } from '@styles';

export const Title = styled.Text`
  text-align: center;
  font-size: ${stylesConfig.fontSize.large};
  color: ${stylesConfig.color.textColor};
  font-weight: ${stylesConfig.fontWeight.bold};
  font-family: ${stylesConfig.fontFamily.primary};
`;
