import { Metadata } from 'next';

import { ProductEdit } from '~/screens/ProductEdit';

import { ProductEditProps } from './types';

export const metadata: Metadata = {
  title: 'Edição do produto',
};

export default function ProductEditPage({ params }: ProductEditProps) {
  return <ProductEdit id={params.id} />;
}
