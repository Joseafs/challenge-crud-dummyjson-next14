'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Button, Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormSearchProducts } from './components/FormSearchProducts';
import { FormSearchProductsProvider } from './components/FormSearchProducts/components/FormSearchProductsProvider';
import { ProductsListCards } from './components/ProductsListCards';
import { ProductsPagination } from './components/ProductsPagination';
import { PaginationProvider } from './context/usePagination';
import { ProductsListProvider, useProductsList } from './context/useProducts';

export const ProductsListWithProvider: FC = () => {
  const { loading } = useProductsList();
  return (
    <TemplateScreen loading={loading}>
      <Grid displayContent="space-between" displayType="inline-flex" padding={[2, 1]}>
        <PageTitle color="primary">Produtos</PageTitle>
        <Link href="/products/add/">
          <Button color="primary" title="Adicionar">
            Adicionar
          </Button>
        </Link>
      </Grid>

      <FormSearchProductsProvider>
        <FormSearchProducts />
      </FormSearchProductsProvider>

      <PaginationProvider>
        <ProductsPagination />
        <ProductsListCards />
        <ProductsPagination />
      </PaginationProvider>
    </TemplateScreen>
  );
};

export const ProductsList: FC = () => (
  <ProductsListProvider>
    <ProductsListWithProvider />
  </ProductsListProvider>
);
