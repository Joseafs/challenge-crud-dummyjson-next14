import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC } from 'react';

import { CardProduct, Grid } from '~/components';
import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';

import { Root } from './styles';

const initialLimit = 150;

export const ProductsListCards: FC = () => {
  const { getProductsList, productsList, loading, onDelete, onEdit } = useProductsList();

  useDidMount(() => {
    getProductsList({ query: { limit: initialLimit } });
  });

  return (
    <Root>
      {/* TODO: Loading component */}
      {loading && <div>carregando</div>}
      {productsList?.map((product, index) => {
        if (product.isDeleted) {
          return;
        }

        return (
          <Grid key={`card-${product.id}-${index}`}>
            <CardProduct onDelete={() => onDelete(product.id)} onEdit={() => onEdit(product.id)} product={product} />
          </Grid>
        );
      })}
    </Root>
  );
};
