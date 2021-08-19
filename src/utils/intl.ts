import { createIntl, createIntlCache } from 'react-intl';
import { RenderType } from '@structures';
import { pl as messages } from '@assets/i18n/pl';

export const intl = createIntl(
  {
    locale: 'pl',
    messages,
  },
  createIntlCache(),
);

export const translate = (
  id: string,
  values?: Record<string, RenderType>,
): string => intl.formatMessage({ id }, { ...values }) as string;
