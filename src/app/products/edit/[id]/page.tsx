import { ProductEdit } from '~/screens/ProductEdit';

interface ProductProps {
  params: {
    id: number;
  };
}

export default function ProductEditPage({ params }: ProductProps) {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ ProductEditPage render');

  return <ProductEdit id={params.id} />;
}
