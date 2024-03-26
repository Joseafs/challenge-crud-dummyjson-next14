import { Metadata } from 'next';

import { ProductsList } from '~/screens/ProductsList';

export const metadata: Metadata = {
  title: 'Lista de produtos',
};

export default function ProductsPage() {
  return <ProductsList />;
}
