import React from 'react';
import { StyleSheet } from 'react-native';
import { Message as MessageStructure } from '@structures';
import { Container } from './styles';

type MessageComponentProps = {
  type: MessageStructure.Type;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
});

export const Message = ({ type, text }: MessageComponentProps): JSX.Element => {
  return (
    <Container style={styles.container} type={type}>
      {text}
    </Container>
  );
};
