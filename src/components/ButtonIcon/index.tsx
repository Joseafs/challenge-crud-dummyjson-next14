import { FC } from 'react';

import { IconContent, RootButton } from './styles';
import { Props } from './types';

export const ButtonIcon: FC<Props> = ({ type, disabled, color, onClick, icon: Icon }) => (
  <RootButton color={color} disabled={disabled} onClick={onClick} title="Voltar" type={type}>
    <IconContent>{<Icon />}</IconContent>
  </RootButton>
);
