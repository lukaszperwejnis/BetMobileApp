import * as Yup from 'yup';
import { translate } from '@utils';

export const passwordSchema = Yup.string()
  .ensure()
  .trim()
  .required(translate('validation.password.required'))
  .matches(
    /^(?=.*[A-Z])(?=.*\d).*[\s\S]{4,}$/,
    translate('validation.password.secure'),
  );
