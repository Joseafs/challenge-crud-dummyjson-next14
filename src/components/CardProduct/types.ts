import { MouseEventHandler } from 'react';

import { ProductData } from '~/services/products/getProduct/types';

type onClick = MouseEventHandler<HTMLButtonElement>;

export interface Props {
  className?: string;
  onDelete: onClick;
  onEdit: onClick;
  product: ProductData;
}
