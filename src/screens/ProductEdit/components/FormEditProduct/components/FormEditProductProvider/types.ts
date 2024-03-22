import { ProductData } from '~/services/products/getProduct/types';

export interface FormikProps extends ProductData {
  urlImage: string;
}
