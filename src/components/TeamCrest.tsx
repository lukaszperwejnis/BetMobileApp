import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { normalize } from '@utils';
import { crests } from '@assets/crests';

type TeamCrestProps = {
  teamName: string;
  size?: number;
};

export const TeamCrest = ({
  teamName,
  size = 50,
  ...props
}: TeamCrestProps): JSX.Element => {
  const parsedTeamName = normalize(teamName).replace(/ /g, '');
  const HomeCrest = crests[parsedTeamName];

  if (HomeCrest) {
    // eslint-disable-next-line react/jsx-pascal-case
    return <HomeCrest.default width={size} height={size} {...props} />;
  }
  return <MaterialCommunityIcons name="soccer" size={size} {...props} />;
};
