import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import { ActiveBets, AvailableBets, Profile } from '@pages';
import { useTranslation } from '@hooks';
import { RouteName } from './RouteName';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingBottom: 75,
  },
});

export const BottomTabs = (): JSX.Element => {
  const translate = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={RouteName.AvailableBets}
      sceneContainerStyle={styles.container}>
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
      <Tab.Screen
        name={RouteName.Profile}
        options={{
          title: translate('pages.title.profile'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
