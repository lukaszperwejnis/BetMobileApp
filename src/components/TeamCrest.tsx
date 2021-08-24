import React from 'react';
import { normalize } from '@utils';
import { crests } from '@assets/crests';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TeamCrestProps = {
  teamName: string;
  size?: number;
};

export const TeamCrest = ({
  teamName,
  size = 50,
  ...props
}: TeamCrestProps): JSX.Element => {
  const parsedTeamName = normalize(teamName).replaceAll(' ', '');
  const HomeCrest = crests[parsedTeamName];

  if (HomeCrest) {
    // eslint-disable-next-line react/jsx-pascal-case
    return <HomeCrest.default width={size} height={size} {...props} />;
  }
  return <MaterialCommunityIcons name="soccer" size={size} {...props} />;
};
