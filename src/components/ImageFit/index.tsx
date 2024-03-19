import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const ImageFit: FC<Props> = ({ description, height, src, width, className, objectFit }) => (
  <Root className={className} src={src} alt={description} width={width} height={height} objectFit={objectFit} />
);
