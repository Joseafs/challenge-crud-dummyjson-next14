'use client';

import { Form, Formik, useFormikContext } from 'formik';
import Link from 'next/link';
import { FC } from 'react';

import { Button, Grid, PageTitle } from '~/components';
import { InputText } from '~/components/InputText';
import { TemplateScreen } from '~/components/TemplateScreen';

import { ProductsListCards } from './components/ProductsListCards';
import { ProductsListProvider } from './context/useProducts';

const ProductsListScreenWithProvider: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext();

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
          name="name"
          onChange={handleChange}
          type="text"
          value={values.name}
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
  <Formik
    initialValues={{ name: 'dasdsada', email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required AAAA';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
  >
    <Form>
      <ProductsListProvider>
        <ProductsListScreenWithProvider />
      </ProductsListProvider>
    </Form>
  </Formik>
);
