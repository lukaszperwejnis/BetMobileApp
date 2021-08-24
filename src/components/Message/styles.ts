import styled, { css } from 'styled-components/native';
import { Message, WithChildrenProps } from '@structures';
import { stylesConfig } from '@styles';

const messageTypeColorDictionary = {
  [Message.Type.Success]: stylesConfig.color.success,
  [Message.Type.Error]: stylesConfig.color.error,
  [Message.Type.Warning]: stylesConfig.color.warning,
  [Message.Type.Info]: stylesConfig.color.primary,
};

interface ContainerProps extends WithChildrenProps {
  type: Message.Type;
}

export const Container = styled.Text<ContainerProps>`
  align-items: center;
  background-color: ${stylesConfig.color.white};
  border-radius: 4px;
  padding: ${stylesConfig.spacing.extraSmall} ${stylesConfig.spacing.normal};
  font-size: ${stylesConfig.fontSize.normal};
  color: ${stylesConfig.color.white};
  text-align: center;

  ${(props: ContainerProps) => css`
    background-color: ${messageTypeColorDictionary[props.type]};
    border: 1px solid ${messageTypeColorDictionary[props.type]};
  `}
`;
