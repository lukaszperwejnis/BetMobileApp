import React from 'react';
import { Provider } from 'react-redux';
import { RawIntlProvider } from 'react-intl';
import { NavigationContainer } from '@react-navigation/native';
import { rootStore } from '@stores/index';
import { AppWrapper, MessageTracker } from '@components';
import { navigationRef, NavigationStructure, linking } from '@navigation';
import { intl } from '@utils';

const App = (): JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Provider store={rootStore}>
        <RawIntlProvider value={intl}>
          <AppWrapper>
            <NavigationStructure />
            <MessageTracker />
          </AppWrapper>
        </RawIntlProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
