export const errors = Object.freeze({
  'error.unknown': 'Ups, coś poszło nie tak',
  'error.unauthorized': 'Nieprawidłowy login lub hasło',
  'error.userNotFound': 'Użytkownik z takim mailem nie istnieje.',
  'error.invalidToken': 'Nieprawidłowy token',
  'error.passwordIsEqualAsCurrent': 'Nowe hasło jest identyczne jak poprzednie',
  'error.userWithGivenMailAlreadyExists':
    'Użytkownik z takim adresem email już istnieje w systemie.',
  'error.fieldsValidation': 'Ups, coś nie tak jest z tymi polami: {fields}',
});
