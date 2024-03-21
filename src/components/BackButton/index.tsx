import { FC } from 'react';

import { IconChevron, RootButton } from './styles';
import { Props } from './types';

const label = 'Voltar';

export const BackButton: FC<Props> = ({ type, disabled, color, onClick, title }) => (
  <RootButton color={color} disabled={disabled} onClick={onClick} title={title || label} type={type}>
    <IconChevron />
    {label}
  </RootButton>
);
