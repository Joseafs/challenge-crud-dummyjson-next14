import { PropsWithChildren } from 'react';

import { PropsThemeColor } from '~/commons/types/theme';
import { PropsFontSizesKeys } from '~/theme/config/types';

export interface OwnProps extends PropsThemeColor {
  size?: PropsFontSizesKeys;
}

export interface Props extends PropsWithChildren, OwnProps {
  className?: string;
}
