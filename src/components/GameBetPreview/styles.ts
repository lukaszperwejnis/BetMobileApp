import styled from 'styled-components/native';
import { stylesConfig } from '@styles';

export const Score = styled.Text`
  font-size: ${stylesConfig.fontSize.huge};
  color: ${stylesConfig.color.textColor};
  padding: 5px;
  width: 35px;
  border: 1px solid transparent;
`;
