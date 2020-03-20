import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

type Props = {
  name: string;
  number: number;
};

export const RestaurantPicker: FunctionComponent<Props> = props => {
  return (
    <>
      <Text>{props.name}</Text>
      <Text>{props.number}</Text>
    </>
  );
};
