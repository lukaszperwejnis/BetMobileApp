import styled, { css } from 'styled-components/native';
import { stylesConfig } from '@styles';
import { Submit } from '@components';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${stylesConfig.spacing.big};
  padding-top: ${stylesConfig.spacing.normal};
  padding-right: ${stylesConfig.spacing.huge};
  padding-left: ${stylesConfig.spacing.huge};
`;

export const ScheduledDate = styled.Text`
  font-size: ${stylesConfig.fontSize.normal};
  color: ${stylesConfig.color.textColor};
  margin-bottom: ${stylesConfig.spacing.big};
`;

export const DetailsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${stylesConfig.spacing.big};
`;

type TeamNameProps = {
  isSelected: boolean;
};

const TeamName = styled.Text<TeamNameProps>`
  font-size: ${stylesConfig.fontSize.small};
  color: ${stylesConfig.color.textColor};
  width: 20%;

  ${(props: TeamNameProps) =>
    props.isSelected &&
    css`
      font-weight: ${stylesConfig.fontWeight.bolder};
    `};
`;

export const HomeTeam = styled(TeamName)`
  margin-right: ${stylesConfig.spacing.small};
`;

export const AwayTeam = styled(TeamName)`
  margin-left: ${stylesConfig.spacing.small};
`;

export const InputContainer = styled.View`
  margin-right: ${stylesConfig.spacing.small};
  margin-left: ${stylesConfig.spacing.small};
  align-items: center;
  flex-direction: row;
`;

type ScoreInputProps = {
  editable: boolean;
};

export const ScoreInput = styled.TextInput<ScoreInputProps>`
  font-size: ${stylesConfig.fontSize.huge};
  color: ${stylesConfig.color.textColor};
  padding: 5px;
  width: 35px;
  border: 1px solid ${stylesConfig.color.textColor};

  ${(props: ScoreInputProps) =>
    !props.editable &&
    css`
      border-color: transparent;
    `};
`;

ScoreInput.defaultProps = {
  keyboardType: 'numeric',
  maxLength: 1,
};

export const Separator = styled.Text`
  font-size: ${stylesConfig.fontSize.huge};
  color: ${stylesConfig.color.textColor};
`;

type ConfirmProps = {
  confirmed: boolean;
};

export const Confirm = styled(Submit)<ConfirmProps>`
  margin-top: 0;
  background-color: ${stylesConfig.color.success};

  ${(props: ConfirmProps) =>
    props.confirmed &&
    css`
      background-color: ${stylesConfig.color.warning};
    `};
`;
