import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { RootStackParamList, RouteName } from '@navigation';
import { StoreType } from '@stores/index';
import { reset as resetPassword } from '@stores/actions';
import { useTranslation } from '@hooks';
import { confirmedPasswordSchema, passwordSchema } from '@field-schemas';
import { tokenService } from '@services';
import { invalidTokenReset } from '@stores/actions/password.actions';
import { CustomPage, FormField, Submit } from '@components';
import { InvalidTokenPage } from '../InvalidToken';

export interface ResetPasswordProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.ResetPassword>;
  route: RouteProp<RootStackParamList, RouteName.ResetPassword>;
}

type FormValues = {
  password: string;
  confirmedPassword: string;
};

const formInitialValues: FormValues = {
  password: '',
  confirmedPassword: '',
};

export const ResetPassword = ({ route }: ResetPasswordProps): JSX.Element => {
  const { token } = route.params;
  const { isLoading, hasInvalidToken } = useSelector(
    (store: StoreType) => store.password,
  );
  const dispatch = useDispatch();
  const translate = useTranslation();

  const schema = Yup.object({
    password: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  });

  const onSubmit = ({ password }: FormValues) => {
    dispatch(resetPassword({ token, password }));
  };

  useEffect(() => {
    if (tokenService.isTokenInvalid(token)) {
      dispatch(invalidTokenReset());
    }
  });

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <CustomPage title={translate('resetPassword.header')} isLoading={isLoading}>
      <Formik
        validationSchema={schema}
        initialValues={formInitialValues}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <TouchableOpacity>
            <FormField.TextInputFormField
              name="password"
              placeholder={translate('fields.password')}
              secureTextEntry
            />
            <FormField.TextInputFormField
              name="confirmedPassword"
              placeholder={translate('fields.confirmedPassword')}
              secureTextEntry
            />
            <Submit
              onPress={handleSubmit as any}
              disabled={isLoading}
              title={translate('resetPassword.cta.submit')}
            />
          </TouchableOpacity>
        )}
      </Formik>
    </CustomPage>
  );
};
