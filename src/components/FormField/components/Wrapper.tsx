import styled from 'styled-components/native';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

export const Wrapper = styled.View<WithChildrenProps>`
  flex-direction: column;
  width: 100%;
  min-width: 0;

  & + & {
    background-color: yellow;
    margin-top: ${stylesConfig.spacing.normal};
  }
`;
