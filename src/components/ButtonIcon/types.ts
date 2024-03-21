import { IconType } from 'react-icons';

import { Props as ButtonProps } from '~/components/Button/types';

export interface Props extends Omit<ButtonProps, 'children'> {
  icon: IconType;
}
