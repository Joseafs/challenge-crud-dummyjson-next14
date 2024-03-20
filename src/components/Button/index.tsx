import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ children, type, disabled, color, onClick }) => {
  return (
    <Root color={color} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Root>
  );
};
