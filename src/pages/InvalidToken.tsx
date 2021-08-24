import React from 'react';
import { Text } from 'react-native';
import { CustomPage } from '@components';
import { useTranslation } from '@hooks';

export const InvalidTokenPage = (): JSX.Element => {
  const translate = useTranslation();
  return (
    <CustomPage title={translate('pages.invalidToken.header')}>
      <Text>{translate('pages.invalidToken.description')}</Text>
    </CustomPage>
  );
};
