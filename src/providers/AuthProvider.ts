import { userService } from '@services';

export class AuthProvider {
  private static instance: AuthProvider;

  private observers: Array<(isLogged: boolean) => void> = [];

  static getInstance(): AuthProvider {
    if (!AuthProvider.instance) {
      AuthProvider.instance = new AuthProvider();
    }

    return AuthProvider.instance;
  }

  subscribe = (observer: (isLogged: boolean) => void): void => {
    this.observers.push(observer);
  };

  unsubscribe = (observer: (isLogged: boolean) => void): void => {
    this.observers = this.observers.filter(
      (_observer) => _observer !== observer,
    );
  };

  notify = (): void => {
    this.observers.forEach((observer) => observer(userService.isLoggedIn()));
  };
}
