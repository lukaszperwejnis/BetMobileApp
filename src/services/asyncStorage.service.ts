import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageService {
  private readonly PREFIX = 'bet';

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(`${this.PREFIX}-${key}`);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      throw new Error(`Unable to get value from localStorage with key ${key}`);
    }
  }

  set(key: string, value: unknown): void {
    if (!value) {
      return;
    }

    const parsedValue = JSON.stringify(value);
    AsyncStorage.setItem(`${this.PREFIX}-${key}`, parsedValue);
  }

  remove(key: string): void {
    AsyncStorage.removeItem(`${this.PREFIX}-${key}`);
  }
}

export const asyncStorageService = new AsyncStorageService();
