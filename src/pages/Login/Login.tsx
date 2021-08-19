import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from '@hooks';
import { CustomPage } from '@components';
import { StoreType } from '@stores/index';
import { login } from '@stores/actions';
import { RouteName } from '@navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInputFormField } from '../../components/FormField/TextInputFormField';
import { emailSchema, getRequiredStringSchema } from '../../schemas';
import { PasswordRestLink, StyledError } from './styles';
import { RootStackParamList } from '../../navigation/NavigationStructure';

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
    navigation.navigate(RouteName.ResetPassword);

  return (
    <CustomPage title={translate('login.header')} isLoading={isLoading}>
      <Formik
        validationSchema={schema}
        initialValues={formInitialsValues}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <TouchableOpacity>
            <TextInputFormField
              name="email"
              placeholder={translate('fields.email')}
            />
            <TextInputFormField
              name="password"
              placeholder={translate('fields.password')}
            />
            <>{Boolean(error) && <StyledError>{error}</StyledError>}</>
            <Button
              disabled={isLoading}
              onPress={handleSubmit as any}
              title={translate('login.submit')}
            />
          </TouchableOpacity>
        )}
      </Formik>
      <PasswordRestLink onPress={onGoToResetPassword}>
        {translate('login.forgotPassword')}
      </PasswordRestLink>
    </CustomPage>
  );
};
