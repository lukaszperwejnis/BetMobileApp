import { navigationRef } from './navigationRef';
import { RootStackParamList } from './NavigationStructure';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function navigate(name: keyof RootStackParamList, params?: any): void {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}
