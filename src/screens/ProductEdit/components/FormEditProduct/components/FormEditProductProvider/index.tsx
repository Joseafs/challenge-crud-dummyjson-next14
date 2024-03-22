import { Formik } from 'formik';
import { FC, PropsWithChildren } from 'react';

import { useProductEdit } from '~/screens/ProductEdit/context/useProduct';

import { RootForm } from './styles';
import { FormikProps } from './types';
import { productValidationShema } from './utils/productValidation';

export const FormEditProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const { product, saveProductById } = useProductEdit();
  return (
    <Formik<FormikProps>
      enableReinitialize
      initialValues={{ ...product, urlImage: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        // NOTE: dummjson only have a postRoute for simulations, but this request doesn't change the API data;
        // - On return /products/, the data will not change;

        saveProductById(values);

        setSubmitting(false);
      }}
      validationSchema={productValidationShema}
    >
      <RootForm>{children}</RootForm>
    </Formik>
  );
};
