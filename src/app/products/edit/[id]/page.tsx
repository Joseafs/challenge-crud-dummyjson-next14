interface ProductProps {
  params: {
    id: number;
  };
}

export default function EditProductPage({ params }: ProductProps) {
  return <div>Edit Product Page {params.id}</div>;
}
