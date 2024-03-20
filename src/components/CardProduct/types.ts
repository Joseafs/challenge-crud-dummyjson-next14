import { MouseEventHandler } from 'react';

import { Product } from '~/services/products/getProducts/types';

type onClick = MouseEventHandler<HTMLButtonElement>;

export interface Props {
  className?: string;
  onDelete: onClick;
  onEdit: onClick;
  product: Product;
}
