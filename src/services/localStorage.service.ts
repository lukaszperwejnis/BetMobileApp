const PREFIX = 'bet';

class LocalStorageService {
  get<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(`${PREFIX}-${key}`);
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
    localStorage.setItem(`${PREFIX}-${key}`, parsedValue);
  }

  remove(key: string): void {
    localStorage.removeItem(`${PREFIX}-${key}`);
  }
}

export const localStorageService = new LocalStorageService();
