import { AxiosError } from 'axios';
import { ErrorCodes, SchemaValidationError } from '@structures';
import { TranslationService } from '@services';

const availableFieldsTranslations = [
  'email',
  'password',
  'newPassword',
  'confirmedPassword',
  'token',
];

const mappedFieldsFromError = (errors: SchemaValidationError[]) => {
  const { translate } = TranslationService.getInstance();
  const mappedErrors = errors.map(({ field }) => {
    if (availableFieldsTranslations.includes(field)) {
      return translate(`fields.${field}`);
    }

    return field;
  });

  return mappedErrors.join(', ');
};

export const mapErrorToMessage = (error: AxiosError): string => {
  const { translate } = TranslationService.getInstance();

  if (!error.response) {
    return translate('error.unknown');
  }

  const { status, data } = error.response;

  switch (true) {
    case status === 401 && data.message === 'Unauthorized':
      return translate('error.unauthorized');
    case data.code === ErrorCodes.UserNotFound:
      return translate('error.userNotFound');
    case data.code === ErrorCodes.PasswordIsEqualAsCurrent:
      return translate('error.passwordIsEqualAsCurrent');
    case data.code === ErrorCodes.UserWithGivenEmailAlreadyExists:
      return translate('error.userWithGivenMailAlreadyExists');
    case data.code === ErrorCodes.ValidationError:
      return translate('error.fieldsValidation', {
        fields: mappedFieldsFromError(data.errors),
      });
    case status === 500 && data.message === 'jwt malformed':
      return translate('error.invalidToken');
    default:
      return translate('error.unknown');
  }
};
