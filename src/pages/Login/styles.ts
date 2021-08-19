import styled from 'styled-components/native';
import { stylesConfig } from '@styles';
import { FormComponents } from '@components';

export const PasswordRestLink = styled.Text`
  margin-top: ${stylesConfig.spacing.huge};
  text-decoration: none;
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.textColor};
  font-size: ${stylesConfig.fontSize.normal};
  text-align: center;
`;

export const StyledError = styled(FormComponents.Error)`
  margin-top: ${stylesConfig.spacing.large};
  font-size: ${stylesConfig.fontSize.normal};
  text-align: center;
`;
