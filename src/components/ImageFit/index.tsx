import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const ImageFit: FC<Props> = (props) => <Root alt={props.description || ''} priority sizes="auto" {...props} />;
