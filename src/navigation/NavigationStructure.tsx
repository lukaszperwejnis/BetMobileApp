import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ResetPassword, SetNewPassword, Signup } from '@pages';
import { RouteName } from './RouteName';

export type RootStackParamList = {
  [RouteName.Signup]: { token: string; email: string };
  [RouteName.Login]: undefined;
  [RouteName.ResetPassword]: undefined;
  [RouteName.SetNewPassword]: { token: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStructure = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.Login}
      screenOptions={{
        header: () => <Text>Siema Ryju</Text>,
        headerStyle: { height: 60 },
      }}>
      <Stack.Screen name={RouteName.Signup} component={Signup} />
      <Stack.Screen name={RouteName.Login} component={Login} />
      <Stack.Screen name={RouteName.ResetPassword} component={ResetPassword} />
      <Stack.Screen
        name={RouteName.SetNewPassword}
        component={SetNewPassword}
      />
    </Stack.Navigator>
  );
};
