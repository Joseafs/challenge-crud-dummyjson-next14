'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Button, Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

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
      <Grid
        backgroundColor="success"
        displayContent="space-between"
        displayType="inline-flex"
        margin={[1]}
        padding={[2, 1]}
      >
        <div>Search(title, brand)</div>
        <div>Select category</div>
      </Grid>

      <ProductsListCards />
    </TemplateScreen>
  );
};

export const ProductsListScreen: FC = () => (
  <ProductsListProvider>
    <ProductsListScreenWithProvider />
  </ProductsListProvider>
);
