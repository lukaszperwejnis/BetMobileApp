import { createIntl, createIntlCache } from 'react-intl';
import { RenderType } from '@structures';
import { Locales } from '@constants';

export class TranslationService {
  private static instance: TranslationService;

  intl: any;

  constructor(locale: Locales, messages: Record<string, string>) {
    this.intl = createIntl(
      {
        locale,
        messages,
      },
      createIntlCache(),
    );

    TranslationService.instance = this;
  }

  static getInstance(): TranslationService {
    return TranslationService.instance;
  }

  translate = (id: string, values?: Record<string, RenderType>): string => {
    if (!TranslationService.instance) {
      throw new Error('Missing TranslationService instance');
    }

    return this.intl.formatMessage({ id }, { ...values }) as string;
  };
}
