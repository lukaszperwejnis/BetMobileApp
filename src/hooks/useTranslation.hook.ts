import { useIntl } from 'react-intl';

type UseTranslationReturnType = (id: string, values?: ValuesType) => string;

type ValuesType = Record<string, string | number> | Record<string, number>[];

export function useTranslation(): UseTranslationReturnType {
  const intl = useIntl();

  return (id: string, values?: ValuesType): string =>
    intl.formatMessage({ id }, { ...values }) as string;
}
