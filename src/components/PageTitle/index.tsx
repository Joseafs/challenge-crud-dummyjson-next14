import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const PageTitle: FC<Props> = ({ children, color, className, size }) => (
  <Root className={className} color={color} size={size}>
    {children}
  </Root>
);
