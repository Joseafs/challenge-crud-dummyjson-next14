import { Form, Formik } from 'formik';
import { FC } from 'react';

import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';

import { Props, PropsFormSearch } from './types';

const initialValues: PropsFormSearch = { search: 'Title or brand' };

export const FormSearchProductsProvider: FC<Props> = ({ children }) => {
  const { getProductsList } = useProductsList();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        await getProductsList({ search: values.search });

        setSubmitting(false);
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
