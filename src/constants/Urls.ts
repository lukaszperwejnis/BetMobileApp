import { CONFIG } from './config';

function getUrl(url: string): string {
  return CONFIG.API_URL + url;
}

export const URLS = {
  USER: {
    SIGNIN: getUrl('/signin'),
    SIGNUP: getUrl('/signup/mail-invitation'),
    START_RESET_PASSWORD: getUrl('/reset-password/start'),
    RESET_PASSWORD: getUrl('/reset-password'),
  },
  TOKENS: {
    REFRESH_TOKEN: getUrl('/verify/refresh/'),
    MAIL_INVITATION: getUrl('/verify/mail-invitation/'),
  },
  BET: {
    AVAILABLE: getUrl('/api/bets/available'),
    USER: getUrl('/api/bets/user'),
    CREATE: getUrl('/api/bets'),
  },
};
