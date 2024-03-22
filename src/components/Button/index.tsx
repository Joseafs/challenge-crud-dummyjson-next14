import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = (props) => {
  return <Root {...props}>{props.children}</Root>;
};
