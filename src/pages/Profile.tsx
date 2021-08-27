import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RouteName } from '@navigation';
import { CustomPage, Submit } from '@components';
import { useTranslation } from '@hooks';
import { userService } from '@services';

export interface ProfileProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.Profile>;
}

export const Profile = ({ navigation }: ProfileProps): JSX.Element => {
  const translate = useTranslation();
  const onLogout = (): void => {
    userService.logout();
    navigation.navigate(RouteName.Login);
  };

  return (
    <CustomPage>
      <Submit title={translate('pages.profile.logout')} onPress={onLogout} />
    </CustomPage>
  );
};
