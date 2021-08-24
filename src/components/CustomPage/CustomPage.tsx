import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WithChildrenProps } from '@structures';
import { CenterWrapper } from '@components';
import { stylesConfig } from '@styles';
import { Title, Description } from './styles';

interface PageTitleProps extends WithChildrenProps {
  title?: string;
  isLoading?: boolean;
  withSpacingAround?: boolean;
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: stylesConfig.color.black,
    opacity: 0.4,
  },
});

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" />
  </View>
);

export const CustomPage = ({
  title,
  children,
  isLoading,
  withSpacingAround = true,
  ...props
}: PageTitleProps): JSX.Element => (
  <CenterWrapper {...props}>
    <>{title && <Title>{title}</Title>}</>
    <Description withSpacingAround={withSpacingAround}>{children}</Description>
    <>{isLoading && <Loading />}</>
  </CenterWrapper>
);
