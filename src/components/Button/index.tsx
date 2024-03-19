import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ children, type, disabled, color, onClick }) => {
  return (
    <Root type={type} disabled={disabled} color={color} onClick={onClick}>
      {children}
    </Root>
  );
};
