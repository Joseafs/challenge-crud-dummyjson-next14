import { FC } from 'react';

import { IconContent, RootButton } from './styles';
import { Props } from './types';

export const ButtonIcon: FC<Props> = (props) => {
  const { icon: Icon } = props;
  return (
    <RootButton {...props}>
      <IconContent>{<Icon />}</IconContent>
    </RootButton>
  );
};
