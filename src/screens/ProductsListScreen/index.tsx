'use client';

import { useFormikContext } from 'formik';
import Link from 'next/link';
import { FC } from 'react';

import { Button, Grid, PageTitle } from '~/components';
import { InputText } from '~/components/InputText';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormSearchProductsProvider } from './components/FormSearchProductsProvider';
import { PropsFormSearch } from './components/FormSearchProductsProvider/types';
import { ProductsListCards } from './components/ProductsListCards';
import { ProductsListProvider } from './context/useProducts';

const ProductsListScreenWithProvider: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

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
        <div>Search (title, brand)</div>
        <div>Sort (title, brand)</div>
        <div>Select category</div>
      </Grid>

      <Grid backgroundColor="info" displayType="inline-flex" margin={[1]} padding={[2, 1]}>
        <InputText
          label="Pesquisar por Nome e Marca"
          name="search"
          onChange={handleChange}
          type="text"
          value={values.search}
        />
        <Button color="secondary" disabled={isSubmitting} type="submit">
          Buscar
        </Button>
      </Grid>

      <ProductsListCards />
    </TemplateScreen>
  );
};

export const ProductsListScreen: FC = () => (
  <ProductsListProvider>
    <FormSearchProductsProvider>
      <ProductsListScreenWithProvider />
    </FormSearchProductsProvider>
  </ProductsListProvider>
);
