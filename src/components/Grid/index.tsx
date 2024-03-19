import { FC, memo } from 'react';

import { Root } from './styles';
import { Props } from './types';

const OgGrid: FC<Props> = ({ children, mgn, align, pdg, zind, bgColor, overflow, flex, className }) => {
  return (
    <Root
      zind={zind}
      mgn={mgn}
      align={align}
      pdg={pdg}
      bgColor={bgColor}
      overflow={overflow}
      className={className}
      flex={flex}
    >
      {children}
    </Root>
  );
};

export const Grid = memo(OgGrid);
