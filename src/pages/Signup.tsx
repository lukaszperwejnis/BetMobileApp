import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Formik } from 'formik';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { RootStackParamList, RouteName } from '@navigation';
import { StoreType } from '@stores/index';
import { useTranslation } from '@hooks';
import { tokenService } from '@services';
import { invalidTokenSignup, signup } from '@stores/actions/auth.actions';
import {
  CustomPage,
  FormField,
  FormComponents,
  StyledTextInput,
  Submit,
} from '@components';
import { confirmedPasswordSchema, passwordSchema } from '@field-schemas';
import { InvalidTokenPage } from './InvalidToken';

export interface SignupProps {
  navigation: StackNavigationProp<RootStackParamList, RouteName.Signup>;
  route: RouteProp<RootStackParamList, RouteName.Signup>;
}

type FormValues = {
  password: string;
  confirmedPassword: string;
};

const formInitialValues: FormValues = { password: '', confirmedPassword: '' };

export const Signup = ({ route }: SignupProps): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoading, hasInvalidToken } = useSelector(
    (store: StoreType) => store.auth,
  );
  const translate = useTranslation();
  const { token, email } = route.params;

  useEffect(() => {
    if (tokenService.isTokenInvalid(token)) {
      dispatch(invalidTokenSignup());
    }
  }, [dispatch, token]);

  const schema = Yup.object({
    password: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  });

  const onSubmit = ({ password }: FormValues) => {
    dispatch(signup({ token, password }));
  };

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <CustomPage title={translate('signup.header')} isLoading={isLoading}>
      <Formik
        validationSchema={schema}
        initialValues={formInitialValues}
        onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <TouchableOpacity>
            <FormComponents.Wrapper>
              <FormComponents.Label>
                {translate('fields.email')}
              </FormComponents.Label>
              <StyledTextInput
                editable={false}
                placeholder={translate('fields.email')}
                value={email}
              />
            </FormComponents.Wrapper>
            <FormField.TextInputFormField
              label={translate('fields.password')}
              name="password"
              placeholder={translate('fields.password')}
              autoCompleteType="off"
              secureTextEntry
            />
            <FormField.TextInputFormField
              label={translate('fields.confirmedPassword')}
              name="confirmedPassword"
              placeholder={translate('fields.confirmedPassword')}
              autoCompleteType="off"
              secureTextEntry
            />
            <Submit
              onPress={handleSubmit as any}
              disabled={isLoading}
              title={translate('signup.submit')}
            />
          </TouchableOpacity>
        )}
      </Formik>
    </CustomPage>
  );
};
