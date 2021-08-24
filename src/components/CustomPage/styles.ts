import styled, { css } from 'styled-components/native';
import { stylesConfig } from '@styles';
import { WithChildrenProps } from '@structures';

export const Title = styled.Text`
  text-align: center;
  font-size: ${stylesConfig.fontSize.large};
  color: ${stylesConfig.color.textColor};
  font-weight: ${stylesConfig.fontWeight.bold};
  margin-bottom: ${stylesConfig.spacing.big};
`;

type DescriptionProps = {
  withSpacingAround: boolean;
} & WithChildrenProps;

export const Description = styled.View<DescriptionProps>`
  width: 100%;
  text-align: center;

  ${(props: DescriptionProps) =>
    props.withSpacingAround &&
    css`
      width: 80%;
    `};
`;
