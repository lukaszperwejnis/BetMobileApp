import React from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Navigation } from '@constants';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './NavigationStructure';

export interface ArticleScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Navigation.Signup>;
  route: RouteProp<RootStackParamList, Navigation.Signup>;
}

export const Signup = ({ route }: ArticleScreenProps): JSX.Element => {
  const { token, email } = route.params;
  return (
    <Text>
      Signup page email: {email} token: {token}
    </Text>
  );
};
