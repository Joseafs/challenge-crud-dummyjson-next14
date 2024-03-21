import { Formik } from 'formik';
import { FC, PropsWithChildren } from 'react';

import { useProductEdit } from '~/screens/ProductEdit/context/useProduct';

import { RootForm } from './styles';

export const FormEditProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const { productData } = useProductEdit();

  return (
    <Formik
      initialValues={productData}
      onSubmit={async (values, { setSubmitting }) => {
        // eslint-disable-next-line no-console
        console.log('🚀 ~ FormEditProductProvider - onSubmit={ ~ values:', values);

        // NOTE: dummjson only have a postRoute for simulations, but this request doesn't change the API data;
        // - On return /products/, the dada will not change;

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
