import { StorageKeys, URLS } from '@constants';
import { User } from '@structures';
import { tokenService } from './token.service';
import { ApiService } from './ApiService/ApiService';
import { AuthProvider } from '../providers/AuthProvider';
import { asyncStorageService } from './asyncStorage.service';

// TODO move to structures
type ValidateInvitationTokenResult = {
  status: number;
  message?: string;
  data?: {
    email: string;
    iat: number;
    exp: number;
  };
};

class AppService extends ApiService {
  setUser = (user: User.DTO) => {
    asyncStorageService.set(StorageKeys.User, user);
  };

  getUser = (): Promise<User.DTO | null> =>
    asyncStorageService.get<User.DTO>(StorageKeys.User);

  validateInvitationToken = (
    token: string,
  ): Promise<ValidateInvitationTokenResult> =>
    this.get<ValidateInvitationTokenResult>(
      URLS.TOKENS.MAIL_INVITATION + token,
    );

  logout = () => {
    tokenService.clearTokens();
    asyncStorageService.remove(StorageKeys.User);
    AuthProvider.getInstance().notify();
  };

  isLoggedIn = (): boolean => {
    return [
      StorageKeys.AccessToken,
      StorageKeys.RefreshToken,
      StorageKeys.User,
    ].every(async (storageKey) => {
      const value = await asyncStorageService.get(storageKey);
      return Boolean(value);
    });
  };
}

export const userService = new AppService();
