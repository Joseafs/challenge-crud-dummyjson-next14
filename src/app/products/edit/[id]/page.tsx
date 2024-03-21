import { ProductEdit } from '~/screens/ProductEdit';

interface ProductProps {
  params: {
    id: number;
  };
}

export default function ProductEditPage({ params }: ProductProps) {
  return <ProductEdit id={params.id} />;
}
