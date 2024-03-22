import { FC } from 'react';

import { Root, SpinnerIcon } from './styled';
import { Props } from './types';

export const Loading: FC<Props> = ({ size }) => (
  <Root size={size}>
    <SpinnerIcon data-testid="loading-spinner" />
  </Root>
);
