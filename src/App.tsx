import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { NavigationContainer } from '@react-navigation/native';
import { Locales } from '@constants';
import * as messages from '@assets/i18n';
import { TranslationService } from '@services';
import { AppWrapper } from '@components';
import { navigationRef, NavigationStructure, linking } from '@navigation';

const App = (): JSX.Element => {
  const translationService = new TranslationService(
    Locales.Pl,
    // eslint-disable-next-line import/namespace
    messages[Locales.Pl] as any,
  );
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <RawIntlProvider value={translationService.intl}>
        <AppWrapper>
          <NavigationStructure />
        </AppWrapper>
      </RawIntlProvider>
    </NavigationContainer>
  );
};

export default App;
