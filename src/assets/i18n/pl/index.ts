import { fields } from './fields';
import { validation } from './validation';
import { login } from './login';
import { signup } from './signup';
import { resetPassword } from './resetPassword';
import { setPassword } from './setPassword';
import { invalidToken } from './invalidToken';
import { errors } from './errors';
import { pages } from './pages';
import { components } from './components';
import { dashboard } from './dashboard';

export const pl = {
  ...fields,
  ...validation,
  ...login,
  ...signup,
  ...resetPassword,
  ...setPassword,
  ...invalidToken,
  ...errors,
  ...pages,
  ...components,
  ...dashboard,
};
