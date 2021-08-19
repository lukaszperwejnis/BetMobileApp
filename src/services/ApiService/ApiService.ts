import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';
import {
  getMappedRequestOptions,
  RequestConfigType,
  RequestOptionsType,
} from './helpers';

const baseURL = Config.API_URL;

export abstract class ApiService {
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({ baseURL });
  }

  get<T>(url: string, config?: RequestOptionsType): Promise<T> {
    if (!config) {
      return this.request.get(url);
    }
    return this.request.get(url, getMappedRequestOptions(config));
  }

  async post<T>(url: string, config?: RequestConfigType): Promise<T> {
    if (!config) {
      return this.request.post(url);
    }
    const { payload, ...options } = config;
    const result = await getMappedRequestOptions(options);
    return this.request.post(url, payload, result);
  }

  put<T>(url: string, config?: RequestConfigType): Promise<T> {
    if (!config) {
      return this.request.put(url);
    }
    const { payload, ...options } = config;
    return this.request.put(url, payload, getMappedRequestOptions(options));
  }

  patch<T>(url: string, config?: RequestConfigType): Promise<T> {
    if (!config) {
      return this.request.patch(url);
    }
    const { payload, ...options } = config;
    return this.request.patch(url, payload, getMappedRequestOptions(options));
  }

  delete<T>(url: string, config?: RequestConfigType): Promise<T> {
    if (!config) {
      return this.request.delete(url);
    }
    const { payload, ...options } = config;
    return this.request.delete(url, getMappedRequestOptions(options));
  }
}
