import { FC, Suspense } from 'react';

import { CardProduct, Grid } from '~/components';
import { getProducts } from '~/services/products';

import { ProductsGridList } from './styles';

const FunctionalProductsCards: FC<{ count: number }> = async ({ count }) => {
  try {
    const { products } = await getProducts({ query: { limit: count } });

    return (
      <ProductsGridList>
        {products.map((product, index) => {
          return (
            <Grid key={`card-${product.id}-${index}`} margin={[1]} padding={[1]}>
              <CardProduct product={product} />
            </Grid>
          );
        })}
      </ProductsGridList>
    );
  } catch (error) {
    // TODO: make some error text component and remove this console...
    <div> Algo deu errado </div>;
  }
};

export const ProductsCards: FC<{ count: number }> = ({ count }) => (
  <Suspense fallback={<div>Carregando</div>}>
    <FunctionalProductsCards count={count} />
  </Suspense>
);
