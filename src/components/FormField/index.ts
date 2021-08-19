import { Description, Error, Label, Wrapper } from './components';
import { TextInputFormField } from './TextInputFormField';

export const FormComponents = {
  Description,
  Error,
  Label,
  Wrapper,
};

type FormFieldType = {
  TextInputFormField: unknown;
};

export const FormField: FormFieldType = {
  TextInputFormField,
};
