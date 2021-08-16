import { AxiosRequestConfig } from 'axios';
import { tokenService } from '../token.service';
import { CONFIG } from '../../config';
// import { ErrorCodes } from '@constants';
// import { cookieAuthService } from '@services';
// import { MissingAuthTokenError } from '@errors';
const baseHeaders = {
  'Content-Type': 'application/json',
  Origin: CONFIG.API_URL,
  'Access-Control-Allow-Origin': '*',
};
export type RequestConfigType = Partial<{
  authRequired: boolean;
  payload: Record<string, any>;
  requestConfig: AxiosRequestConfig;
}>;
export type RequestOptionsType = Omit<RequestConfigType, 'payload'>;
// type ErrorsValidationReturnType = {
//     hasInternalError: boolean;
//     hasInvalidRefreshToken: boolean;
//     hasInvalidAccessToken: boolean;
// };
// export function getErrorsValidationByResponse(
//     error: AxiosError,
// ): ErrorsValidationReturnType {
//     if (!error.response || !error.config || !error.config.url) {
//         return {
//             hasInternalError: false,
//             hasInvalidRefreshToken: false,
//             hasInvalidAccessToken: false,
//         };
//     }
//     return {
//         hasInternalError:
//             error.response.status >= ErrorCodes.INTERNAL_SERVER_ERROR &&
//             error.response.status !== ErrorCodes.BAD_GATEWAY &&
//             error.response.status !== ErrorCodes.SERVICE_UNAVAILABLE,
//         hasInvalidRefreshToken:
//             error.response.status === ErrorCodes.UNAUTHORIZED &&
//             error.config.url.includes('refresh-token'),
//         hasInvalidAccessToken:
//             error.response.status === ErrorCodes.UNAUTHORIZED &&
//             !error.config.url.includes('login'),
//     };
// }
export function getMappedRequestOptions(
  options: RequestOptionsType,
): Record<string, unknown> {
  const { authRequired, requestConfig } = options;
  if (!authRequired && !requestConfig) {
    return {
      headers: {
        ...baseHeaders,
      },
    };
  }
  if (!authRequired && requestConfig) {
    return {
      headers: {
        ...baseHeaders,
      },
      ...requestConfig,
    };
  }
  const token = tokenService.getAccessToken();
  if (!token) {
    throw new Error('Missing access token');
  }

  return {
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
    ...options.requestConfig,
  };
}
