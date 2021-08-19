import * as Yup from 'yup';
import { translate } from '@utils';

export const emailSchema = Yup.string()
  .email(translate('validation.email.syntax'))
  .required(translate('validation.email.required'))
  .trim();
