import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActiveBets, AvailableBets } from '@pages';
import { useTranslation } from '@hooks';
import { RouteName } from './RouteName';

const Tab = createBottomTabNavigator();

export const BottomTabs = (): JSX.Element => {
  const translate = useTranslation();
  return (
    <Tab.Navigator initialRouteName={RouteName.AvailableBets}>
      <Tab.Screen
        name={RouteName.AvailableBets}
        options={{
          title: translate('pages.title.availableBets'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={color}
              size={26}
            />
          ),
        }}
        component={AvailableBets}
      />
      <Tab.Screen
        name={RouteName.ActiveBets}
        options={{
          title: translate('pages.title.activeBets'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="progress-clock"
              color={color}
              size={26}
            />
          ),
        }}
        component={ActiveBets}
      />
      {/* <Tab.Screen           name={RouteName.FinishedBets}     options={{ title: translate('pages.title.finishedBets') }} component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
