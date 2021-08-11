import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from '@constants';
import { Login } from './Login/Login';
import { ResetPassword } from './ResetPassword/ResetPassword';
import { SetNewPassword } from './SetNewPassword/SetNewPassword';

export type RootStackParamList = {
  [Navigation.Login]: undefined;
  [Navigation.ResetPassword]: undefined;
  [Navigation.SetNewPassword]: { email: string; token: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStructure = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Navigation.Login}
      screenOptions={{
        header: () => <Text>Siema Ryju</Text>,
        headerStyle: { height: 60 },
      }}>
      <Stack.Screen name={Navigation.Login} component={Login} />
      <Stack.Screen name={Navigation.ResetPassword} component={ResetPassword} />
      <Stack.Screen
        name={Navigation.SetNewPassword}
        component={SetNewPassword}
      />
    </Stack.Navigator>
  );
};
