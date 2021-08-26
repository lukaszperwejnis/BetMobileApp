import styled from 'styled-components/native';
import { FlatListProps } from 'react-native';
import { CustomPage } from '@components';

export const StyledCustomPage = styled(CustomPage)`
  padding-top: 100px;
`;

export const Wrapper = styled.View`
  padding-right: 30px;
  padding-left: 30px;
`;

export const StyledList = styled.FlatList<FlatListProps<unknown>>`
  height: 100%;
`;
