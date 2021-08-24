import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { stylesConfig } from '@styles';
import { RenderType } from '@structures';
import { Container, StyledText, Content } from './styles';

type EmptyStateProps = {
  text: string;
  icon: string;
  children?: RenderType;
};

export const EmptyState = ({
  text,
  icon,
  children,
}: EmptyStateProps): JSX.Element => (
  <Container>
    <StyledText>{text}</StyledText>
    <MaterialCommunityIcons
      name={icon}
      size={75}
      color={stylesConfig.color.textColor}
    />
    {Boolean(children) && <Content>{children}</Content>}
  </Container>
);
