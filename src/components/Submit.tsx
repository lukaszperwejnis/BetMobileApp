import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import { stylesConfig } from '@styles';

type SubmitProps = {
  title: string;
  onPress: any;
  disabled?: boolean;
} & TouchableOpacityProps;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: stylesConfig.color.primary,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 2,
    padding: 10,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: stylesConfig.color.white,
    textTransform: 'uppercase',
    fontWeight: stylesConfig.fontWeight.bolder,
  },
});

export const Submit = ({
  title,
  onPress,
  disabled,
  style,
}: SubmitProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
