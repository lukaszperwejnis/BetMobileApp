import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from '@hooks';
import { CustomPage, FormField, Submit } from '@components';
import { StoreType } from '@stores/index';
import { login } from '@stores/actions';
import { RouteName, RootStackParamList } from '@navigation';
import { emailSchema, getRequiredStringSchema } from '@field-schemas';
import { PasswordRestLink, StyledError } from './styles';

type FormValues = {
  email: string;
  password: string;
};

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.Login>;
}

const formInitialsValues: FormValues = { email: '', password: '' };

export const Login = ({ navigation }: LoginProps): JSX.Element => {
  const dispatch = useDispatch();
  const translate = useTranslation();
  const { isLoading, error } = useSelector((store: StoreType) => store.auth);

  const schema = Yup.object({
    email: emailSchema,
    password: getRequiredStringSchema(
      translate('validation.password.required'),
    ),
  });

  const onSubmit = async (values: FormValues) => {
    dispatch(login(values));
  };

  const onGoToResetPassword = () =>
    navigation.navigate(RouteName.StartResetPassword);

  return (
    <CustomPage title={translate('pages.login.header')} isLoading={isLoading}>
      <Formik
        validationSchema={schema}
        initialValues={formInitialsValues}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <TouchableOpacity>
            <FormField.TextInputFormField
              name="email"
              placeholder={translate('fields.email')}
            />
            <FormField.TextInputFormField
              name="password"
              placeholder={translate('fields.password')}
              secureTextEntry
            />
            <>{Boolean(error) && <StyledError>{error}</StyledError>}</>
            <Submit
              disabled={isLoading}
              onPress={handleSubmit as any}
              title={translate('pages.login.submit')}
            />
          </TouchableOpacity>
        )}
      </Formik>
      <PasswordRestLink onPress={onGoToResetPassword}>
        {translate('pages.login.forgotPassword')}
      </PasswordRestLink>
    </CustomPage>
  );
};
