import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { WithExcludedChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

export interface StyledTextInputProps
  extends WithExcludedChildrenProps,
    TextInputProps {
  isInvalid?: boolean;
  withSpacingTop?: boolean;
}

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  border: 1px solid ${stylesConfig.color.secondary};
  border-radius: 4px;
  color: ${stylesConfig.color.textColor};
  font-size: ${stylesConfig.fontSize.normal};
  padding: 7px 14px;
  min-width: 50%;
  ${(props: StyledTextInputProps) =>
    props.isInvalid &&
    css`
      border-color: ${stylesConfig.color.guardsmanRed};
    `};
  ${(props: StyledTextInputProps) =>
    props.editable &&
    css`
      opacity: ${stylesConfig.opacity.disabled};
      background-color: transparent;
    `};

  ${(props: StyledTextInputProps) =>
    props.withSpacingTop &&
    css`
      margin-top: ${stylesConfig.spacing.normal};
    `};
`;
