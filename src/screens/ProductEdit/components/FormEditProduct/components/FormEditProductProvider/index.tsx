import { Formik } from 'formik';
import { FC, PropsWithChildren } from 'react';

import { useProductEdit } from '~/screens/ProductEdit/context/useProduct';

import { RootForm } from './styles';

export const FormEditProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const { product, saveProductById } = useProductEdit();

  return (
    <Formik
      initialValues={product}
      onSubmit={async (values, { setSubmitting }) => {
        // NOTE: dummjson only have a postRoute for simulations, but this request doesn't change the API data;
        // - On return /products/, the data will not change;

        saveProductById(values);

        setSubmitting(false);
      }}
      // TODO: add validates for fields
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
