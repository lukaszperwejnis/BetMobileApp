import ModalSelector from 'react-native-modal-selector';
import { stylesConfig } from '@styles';
import React from 'react';
import { useTranslation } from '@hooks';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  select: {
    borderColor: stylesConfig.color.primary,
    marginBottom: 20,
    borderRadius: 0,
  },
});

type StyledModalSelectorProps = {
  data: { key: string; label: string }[];
  onChange: any;
  initValue?: string;
  cancelText?: string;
};

export const StyledModalSelector = ({
  initValue,
  data,
  onChange,
  cancelText,
}: StyledModalSelectorProps): JSX.Element => {
  const translate = useTranslation();
  return (
    <ModalSelector
      initValue={initValue || translate('modalSelector.placeholder')}
      data={data}
      onChange={onChange}
      cancelText={cancelText || translate('modalSelector.cta.cancel')}
      renderItem={({ item }: any) => item.label}
      selectStyle={styles.select}
      selectTextStyle={{
        color: stylesConfig.color.primary,
      }}
      initValueTextStyle={{
        color: stylesConfig.color.primary,
      }}
    />
  );
};
