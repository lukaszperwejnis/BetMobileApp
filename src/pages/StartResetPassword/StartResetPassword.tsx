import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Text } from 'react-native';
import { useTranslation } from '@hooks';
import { StoreType } from '@stores/index';
import { startReset } from '@stores/actions';
import { CustomPage, FormField } from '@components';
import { emailSchema } from '@field-schemas';

type FormValues = {
  email: string;
};

const initialFormValues: FormValues = {
  email: '',
};

export const StartResetPassword = (): JSX.Element => {
  const dispatch = useDispatch();
  const translate = useTranslation();
  const { isLoading, isSuccess } = useSelector(
    (store: StoreType) => store.password,
  );

  const schema = Yup.object({
    email: emailSchema,
  });

  const onSubmit = (values: FormValues) => {
    dispatch(startReset(values));
  };

  const StartResetPasswordForm = (): JSX.Element => (
    <Formik
      validationSchema={schema}
      initialValues={initialFormValues}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <>
          <FormField.TextInputFormField
            name="email"
            placeholder={translate('fields.email')}
          />
          <Button
            onPress={handleSubmit as any}
            disabled={isLoading}
            title={translate('startResetPassword.cta.submit')}
          />
        </>
      )}
    </Formik>
  );

  const SuccessInfo = (): JSX.Element => (
    <Text>{translate('startResetPassword.success')}</Text>
  );

  return (
    <CustomPage
      title={translate('startResetPassword.header')}
      isLoading={isLoading}>
      {isSuccess ? <SuccessInfo /> : <StartResetPasswordForm />}
    </CustomPage>
  );
};
