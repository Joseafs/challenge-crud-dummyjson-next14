import { FC, Suspense } from 'react';

import { getProducts } from '~/services/products';

export const FunctionalProcutsTableData: FC<{ count: number }> = async ({ count }) => {
  try {
    const { products } = await getProducts({ query: { limit: count } });

    return (
      <div>
        <h3>Products</h3>
        total list: {products.length}
        <br />
        json list:
        <br />
        {JSON.stringify(products)}
      </div>
    );
  } catch (error) {
    // TODO: make some error text component and remove this console...
    console.error('Erro ao carregar produtos:', error);
  }
};

export const ProductsTableData: FC<{ count: number }> = ({ count }) => (
  <Suspense fallback={<div>Carregando</div>}>
    <FunctionalProcutsTableData count={count} />
  </Suspense>
);
