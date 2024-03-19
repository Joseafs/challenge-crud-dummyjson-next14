import { FC, memo } from 'react';

import { Root } from './styles';
import { Props } from './types';

const OgGrid: FC<Props> = ({
  children,
  margin,
  align,
  padding,
  zIndex,
  backgroundColor,
  overflow,
  flex,
  className,
}) => {
  return (
    <Root
      align={align}
      backgroundColor={backgroundColor}
      className={className}
      flex={flex}
      margin={margin}
      overflow={overflow}
      padding={padding}
      zIndex={zIndex}
    >
      {children}
    </Root>
  );
};

export const Grid = memo(OgGrid);
