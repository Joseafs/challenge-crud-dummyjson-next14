'use client';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC, Fragment, useMemo } from 'react';

import { Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormEditProduct } from './components/FormEditProduct';
import { FormEditProductProvider } from './components/FormEditProduct/components/FormEditProductProvider';
import { ProductEditProvider, useProductEdit } from './context/useProduct';
import { ProviderProductProps } from './context/useProduct/types';

const ProductEditWithProvider: FC<ProviderProductProps> = ({ createMode }) => {
  const { getProductData, product } = useProductEdit();

  useDidMount(() => {
    getProductData();
  });

  const pageTitle = useMemo(() => {
    if (createMode) {
      return 'Adicionar novo produto';
    }
    return `Produto ${product.title}`;
  }, [createMode, product.title]);

  return (
    <TemplateScreen buttonBackRoute="/products/" hasBackButton>
      <Fragment>
        <Grid displayContent="space-between" displayType="inline-flex" padding={[2, 1]}>
          <PageTitle color="primary">{pageTitle}</PageTitle>
        </Grid>
        <FormEditProductProvider>
          <FormEditProduct />
        </FormEditProductProvider>
      </Fragment>
    </TemplateScreen>
  );
};

export const ProductEdit: FC<ProviderProductProps> = ({ id, createMode = false }) => (
  <ProductEditProvider createMode={createMode} id={id}>
    <ProductEditWithProvider createMode={createMode} />
  </ProductEditProvider>
);
