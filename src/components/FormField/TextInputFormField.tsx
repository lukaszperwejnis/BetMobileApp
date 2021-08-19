import React from 'react';
import { useField } from 'formik';
import { RenderType, Styles, WithExcludedChildrenProps } from '@structures';
import { Label, Wrapper, Error, Description } from './components';
import { StyledTextInput, StyledTextInputProps } from '../StyledTextInput';

interface FormFieldTextInputProps extends WithExcludedChildrenProps {
  name: string;
  withSpacingTop?: boolean;
  label?: RenderType;
  description?: RenderType;
  errorMessage?: RenderType;
  wrapperStyles?: Styles;
  labelStyles?: Styles;
}

export const TextInputFormField = ({
  label,
  description,
  errorMessage,
  wrapperStyles,
  labelStyles,
  name,
  withSpacingTop = true,
  ...props
}: FormFieldTextInputProps & StyledTextInputProps): JSX.Element => {
  const [field, meta] = useField(name);
  const hasError = Boolean(errorMessage || (meta.touched && meta.error));
  const error = errorMessage || meta.error;
  return (
    <Wrapper style={wrapperStyles}>
      <>
        {label && (
          <Label withSpacingTop={withSpacingTop} style={labelStyles}>
            {label}
          </Label>
        )}
      </>
      <StyledTextInput
        value={field.value}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        isInvalid={hasError}
        withSpacingTop={label ? false : withSpacingTop}
        autoCapitalize="none"
        {...props}
      />
      <>{hasError && error && <Error data-error={field.name}>{error}</Error>}</>
      <>{description && <Description>{description}</Description>}</>
    </Wrapper>
  );
};
