import { FC } from 'react';

import { IconChevron, RootButton } from './styles';
import { Props } from './types';

export const BackButton: FC<Props> = ({ type, disabled, color, onClick }) => (
  <RootButton color={color} disabled={disabled} onClick={onClick} title="Voltar" type={type}>
    <IconChevron />
    Voltar
  </RootButton>
);
