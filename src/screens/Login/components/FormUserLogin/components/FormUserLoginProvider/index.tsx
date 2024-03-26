import { Formik } from 'formik';
import { FC, PropsWithChildren } from 'react';

import { useUserAuth } from '~/screens/Login/context/useUserAuth';

import { RootForm } from './styles';
import { FormikUserLoginProps } from './types';
import { userLoginValidationShema } from './utils/userValidation';

export const FormUserLoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const { getUserAuthentication } = useUserAuth();

  return (
    <Formik<FormikUserLoginProps>
      enableReinitialize
      initialValues={{ password: '', username: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        getUserAuthentication(values);

        setSubmitting(false);
      }}
      validationSchema={userLoginValidationShema}
    >
      <RootForm>{children}</RootForm>
    </Formik>
  );
};
