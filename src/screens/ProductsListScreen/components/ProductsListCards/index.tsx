import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC } from 'react';

import { CardProduct, Grid } from '~/components';
import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';

import { Root } from './styles';

export const ProductsListCards: FC = () => {
  const {
    getProductsList,
    productsData: { products },
    onDelete,
    onEdit,
  } = useProductsList();

  useDidMount(() => {
    getProductsList();
  });

  return (
    <Root>
      {products?.map((product, index) => {
        if (product.isDeleted) {
          return;
        }

        return (
          <Grid backgroundColor="success" key={`card-${product.id}-${index}`} margin={[1]} padding={[1]}>
            <CardProduct onDelete={() => onDelete(product.id)} onEdit={() => onEdit(product.id)} product={product} />
          </Grid>
        );
      })}
    </Root>
  );
};
