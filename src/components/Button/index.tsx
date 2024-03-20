import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ children, type, disabled, color, onClick, title, className }) => {
  return (
    <Root className={className} color={color} disabled={disabled} onClick={onClick} title={title} type={type}>
      {children}
    </Root>
  );
};
