import { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import { tokenService } from '../token.service';

const baseHeaders = {
  'Content-Type': 'application/json',
  Origin: Config.API_URL,
  'Access-Control-Allow-Origin': '*',
};
export type RequestConfigType = Partial<{
  authRequired: boolean;
  payload: Record<string, any>;
  requestConfig: AxiosRequestConfig;
}>;
export type RequestOptionsType = Omit<RequestConfigType, 'payload'>;

export async function getMappedRequestOptions(
  options: RequestOptionsType,
): Promise<Record<string, unknown>> {
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
  const token = await tokenService.getAccessToken();

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
