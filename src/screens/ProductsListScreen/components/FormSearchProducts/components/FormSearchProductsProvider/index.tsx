import { Formik } from 'formik';
import { FC } from 'react';

import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';

import { RootForm } from './styles';
import { Props, PropsFormSearch } from './types';

const initialValues: PropsFormSearch = { search: 'Title or brand' };

export const FormSearchProductsProvider: FC<Props> = ({ children }) => {
  const { searchActualProductsList } = useProductsList();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        // NOTE: it's sad dummyjson doesn't have orderby
        // - the challenge requirements need search for title and brand;
        // - Dummyjson only works with title search;

        // await getProductsList({ search: values.search });
        searchActualProductsList(values.search);

        setSubmitting(false);
      }}
      // validate={(values) => {
      //   const errors = {} as PropsFormSearch;
      //   if (!values.search) {
      //     errors.search = 'Required AAAA';
      //   }
      //   return errors;
      // }}
    >
      <RootForm>{children}</RootForm>
    </Formik>
  );
};
