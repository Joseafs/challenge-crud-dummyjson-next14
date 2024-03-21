import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC, useEffect, useMemo } from 'react';

import { CardProduct, Grid } from '~/components';
import { usePagination } from '~/screens/ProductsListScreen/context/usePagination';
import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';

import { Root } from './styles';

const initialLimit = 150;

export const ProductsListCards: FC = () => {
  const { getProductsList, productsList, loading, onDelete, onEdit, productsData, totalEnabledProducts } =
    useProductsList();

  const { currentPage, setCurrentPage, itemsPerPage, setTotalItems } = usePagination();

  useDidMount(() => {
    getProductsList({ query: { limit: initialLimit } });
  });

  useEffect(() => {
    setTotalItems(totalEnabledProducts);
  }, [productsData.products.length, setTotalItems, totalEnabledProducts]);

  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const endIndex = useMemo(() => startIndex + itemsPerPage, [itemsPerPage, startIndex]);

  const paginatedProductsList = useMemo(
    () => productsList?.slice(startIndex, endIndex),
    [endIndex, productsList, startIndex],
  );

  useEffect(() => {
    if (totalEnabledProducts > startIndex) {
      return;
    }
    setCurrentPage(1);
  }, [
    currentPage,
    itemsPerPage,
    productsData.products.length,
    setCurrentPage,
    setTotalItems,
    startIndex,
    totalEnabledProducts,
  ]);

  return (
    productsList && (
      <Root>
        {loading && <div>carregando</div>}

        {paginatedProductsList?.map((product, index) => {
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
    )
  );
};
