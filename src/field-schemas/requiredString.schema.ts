import * as Yup from 'yup';
import { translate } from '@utils';

export const getRequiredStringSchema = (
  requiredMessage?: string,
): ReturnType<typeof Yup.string> =>
  Yup.string()
    .required(requiredMessage || translate('validation.field.required'))
    .trim();
