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
  displayType,
  gridGap,
  className,
  displayContent,
}) => {
  return (
    <Root
      align={align}
      backgroundColor={backgroundColor}
      className={className}
      displayContent={displayContent}
      displayType={displayType}
      gridGap={gridGap}
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
