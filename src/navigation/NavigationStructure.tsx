import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, StartResetPassword, ResetPassword, Signup } from '@pages';
import { useTranslation } from '@hooks';
import { RouteName } from './RouteName';
import { BottomTabs } from './BottomTabs';

export type RootStackParamList = {
  [RouteName.Signup]: { token: string; email: string };
  [RouteName.Login]: undefined;
  [RouteName.StartResetPassword]: undefined;
  [RouteName.ResetPassword]: { token: string };
  [RouteName.Main]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStructure = (): JSX.Element => {
  const translate = useTranslation();
  return (
    <Stack.Navigator initialRouteName={RouteName.Login}>
      <Stack.Screen
        name={RouteName.Login}
        component={Login}
        options={{ title: translate('pages.login') }}
      />
      <Stack.Screen
        name={RouteName.Signup}
        component={Signup}
        options={{ title: translate('pages.signup'), headerLeft: () => null }}
      />
      <Stack.Screen
        name={RouteName.StartResetPassword}
        component={StartResetPassword}
        options={{ title: translate('pages.passwordReset') }}
      />
      <Stack.Screen
        name={RouteName.ResetPassword}
        component={ResetPassword}
        options={{
          title: translate('pages.setPassword'),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={RouteName.Main}
        component={BottomTabs}
        options={{
          headerLeft: () => null,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
