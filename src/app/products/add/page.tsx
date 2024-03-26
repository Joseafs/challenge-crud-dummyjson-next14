import { Metadata } from 'next';

import { ProductEdit } from '~/screens/ProductEdit';

export const metadata: Metadata = {
  title: 'Adicionar produto',
};

export default function ProductAddPage() {
  return <ProductEdit createMode />;
}
