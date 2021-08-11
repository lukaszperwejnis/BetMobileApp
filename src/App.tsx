import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { NavigationContainer } from '@react-navigation/native';
import { Locales, Navigation } from '@constants';
import * as messages from '@assets/i18n';
import { TranslationService } from '@services';
import { AppWrapper } from '@components';
import { NavigationStructure } from '@pages';
import { LinkingOptions } from '@react-navigation/native/lib/typescript/src/types';
import { RootStackParamList } from './pages/NavigationStructure';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['betmobileapp://'],
  config: {
    screens: {
      [Navigation.Signup]: 'signup/:token/:email',
    },
  },
};

const App = (): JSX.Element => {
  const translationService = new TranslationService(
    Locales.Pl,
    // eslint-disable-next-line import/namespace
    messages[Locales.Pl] as any,
  );
  return (
    <NavigationContainer linking={linking}>
      <RawIntlProvider value={translationService.intl}>
        <AppWrapper>
          <NavigationStructure />
        </AppWrapper>
      </RawIntlProvider>
    </NavigationContainer>
  );
};

export default App;
