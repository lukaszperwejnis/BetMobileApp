import React from 'react';
import { Text } from 'react-native';
import { CustomPage } from '@components';
import { useTranslation } from '@hooks';

export const InvalidTokenPage = (): JSX.Element => {
  const translate = useTranslation();
  return (
    <CustomPage title={translate('invalidToken.header')}>
      <Text>{translate('invalidToken.description')}</Text>
    </CustomPage>
  );
};
