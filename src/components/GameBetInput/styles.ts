import styled, { css } from 'styled-components/native';
import { stylesConfig } from '@styles';

export const Container = styled.View`
  justify-content: center;
  margin-top: ${stylesConfig.spacing.big};
`;

export const ScheduledDate = styled.Text`
  font-size: ${stylesConfig.fontSize.normal};
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.primary};
  margin-bottom: ${stylesConfig.spacing.normal};
`;

export const DetailsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

type TeamNameProps = {
  isSelected: boolean;
};

export const TeamName = styled.Text<TeamNameProps>`
  font-size: ${stylesConfig.fontSize.small};
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.primary};
  width: 20%;

  ${(props: TeamNameProps) =>
    props.isSelected &&
    css`
      font-weight: ${stylesConfig.fontWeight.bold};
    `};
`;

export const InputContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ScoreInput = styled.TextInput`
  font-size: ${stylesConfig.fontSize.huge};
  color: ${stylesConfig.color.primary};
  padding: 5px;
  width: 30px;
  border: 1px solid ${stylesConfig.color.primary};
`;

ScoreInput.defaultProps = {
  keyboardType: 'numeric',
  maxLength: 2,
};

export const Separator = styled.Text`
  font-size: ${stylesConfig.fontSize.huge};
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.primary};
`;

export const Confirm = styled.Button`
  margin-top: ${stylesConfig.spacing.normal};
  text-transform: uppercase;
`;
