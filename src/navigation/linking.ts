import { LinkingOptions } from '@react-navigation/native/lib/typescript/src/types';
import { RouteName } from './index';
import { RootStackParamList } from './NavigationStructure';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['betmobileapp://'],
  config: {
    screens: {
      [RouteName.Signup]: 'signup/:token/:email',§
    },
  },
};
