import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const ImageFit: FC<Props> = ({ description, height, src, width, className, fit, fill }) => (
  <Root
    alt={description || ''}
    className={className}
    fill={fill}
    fit={fit}
    height={height}
    priority
    sizes="auto"
    src={src}
    width={width}
  />
);
