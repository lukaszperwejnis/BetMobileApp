import { StorageKeys } from '@constants';
import { ErrorApiResponse } from '@structures';
import { asyncStorageService } from './asyncStorage.service';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

class TokenService {
  setTokens({ accessToken, refreshToken }: Tokens): void {
    asyncStorageService.set(StorageKeys.AccessToken, accessToken);
    asyncStorageService.set(StorageKeys.RefreshToken, refreshToken);
  }

  clearTokens(): void {
    asyncStorageService.remove(StorageKeys.AccessToken);
    asyncStorageService.remove(StorageKeys.RefreshToken);
  }

  getAccessToken(): Promise<unknown> {
    return asyncStorageService.get(StorageKeys.AccessToken);
  }

  private static getExpirationDate(jwtToken: string): number {
    try {
      const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
      return (jwt && jwt.exp && jwt.exp * 1000) || -1;
    } catch (error) {
      return -1;
    }
  }

  private static isExpired(exp: number | null): boolean {
    return exp ? Date.now() > exp : false;
  }

  isTokenInvalid = (jwtToken: string): boolean => {
    return TokenService.isExpired(TokenService.getExpirationDate(jwtToken));
  };

  isInvalidTokenError = (error: ErrorApiResponse): boolean => {
    return error.status === 500 && error.message === 'jwt malformed';
  };
}

export const tokenService = new TokenService();
