import styled, { css } from 'styled-components/native';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

type LabelProps = {
  withSpacingTop?: boolean;
} & WithChildrenProps;

export const Label = styled.Text<LabelProps>`
  margin-bottom: ${stylesConfig.spacing.small};
  font-size: ${stylesConfig.fontSize.normal};
  color: ${stylesConfig.color.textColor};
  font-weight: ${stylesConfig.fontWeight.bold};

  ${(props: LabelProps) =>
    props.withSpacingTop &&
    css`
      margin-top: ${stylesConfig.spacing.normal};
    `};
`;
