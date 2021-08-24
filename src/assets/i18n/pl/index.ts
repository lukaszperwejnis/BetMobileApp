import { fields } from './fields';
import { validation } from './validation';
import { errors } from './errors';
import { pages } from './pages';
import { components } from './components';

export const pl = {
  ...fields,
  ...validation,
  ...errors,
  ...pages,
  ...components,
};
