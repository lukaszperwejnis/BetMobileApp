import * as Yup from 'yup';
import { translate } from '@utils';

export const confirmedPasswordSchema = Yup.string()
  .ensure()
  .trim()
  .required(translate('validation.confirmedPassword.required'))
  .test(
    'is-equal-to-password',
    translate('validation.passwordAreNotEqual'),
    function yupConfirmedPasswordCustomValidation() {
      if (!this.parent.password.length) {
        return true;
      }

      return this.parent.password === this.parent.confirmedPassword;
    },
  );
