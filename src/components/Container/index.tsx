import { FC } from 'react';

import { Root } from './styled';
import { Props } from './types';

export const Container: FC<Props> = ({ children, className, fixed }) => {
  return (
    <Root className={className} fixed={fixed}>
      {children}
    </Root>
  );
};
