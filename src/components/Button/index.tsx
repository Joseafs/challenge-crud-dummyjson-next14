import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({
  children,
  type = 'button',
  disabled,
  color,
  onClick,
  title,
  className,
  fullWidth,
}) => {
  return (
    <Root
      className={className}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
    </Root>
  );
};
