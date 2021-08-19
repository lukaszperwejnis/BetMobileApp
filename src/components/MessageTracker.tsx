import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { StoreType } from '@stores/index';
import { Message as MessageComponent } from './Message/Message';

const styles = StyleSheet.create({
  list: {
    position: 'absolute',
    zIndex: 1010,
    top: 150,
    left: 0,
    right: 0,
  },
});

export const MessageTracker = (): JSX.Element => {
  const messages = useSelector((store: StoreType) => store.messages);
  return (
    <FlatList
      style={styles.list}
      data={messages}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <MessageComponent {...item} />}
    />
  );
};
