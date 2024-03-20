'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Button, Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormSearchProducts } from './components/FormSearchProducts';
import { FormSearchProductsProvider } from './components/FormSearchProducts/components/FormSearchProductsProvider';
import { ProductsListCards } from './components/ProductsListCards';
import { ProductsListProvider } from './context/useProducts';

const ProductsListScreenWithProvider: FC = () => {
  return (
    <TemplateScreen>
      <Grid displayContent="space-between" displayType="inline-flex" padding={[2, 1]}>
        <PageTitle color="primary">Produtos </PageTitle>
        <Link href="/add" passHref>
          <Button color="primary">Adicionar</Button>
        </Link>
      </Grid>
      <br />

      <FormSearchProductsProvider>
        <FormSearchProducts />
      </FormSearchProductsProvider>

      <ProductsListCards />
    </TemplateScreen>
  );
};

export const ProductsListScreen: FC = () => (
  <ProductsListProvider>
    <ProductsListScreenWithProvider />
  </ProductsListProvider>
);
