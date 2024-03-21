import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { getProduct } from '~/services/products/getProduct';
import { ProductData } from '~/services/products/getProduct/types';

import { ProductsContext } from './types';
import { initialProductDataState } from './values';

export const ProductEditContext = createContext({} as ProductsContext);

export const ProductEditProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [productData, setProductData] = useState<ProductData>(initialProductDataState);
  const [loading, setLoading] = useState(false);

  const getProductById = useCallback(
    async (id: number) => {
      setLoading(true);

      try {
        const data = await getProduct(id);
        setProductData(data);
      } catch (e) {
        alert('Produto não encontrado');
        router.replace('/products');
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  return (
    <ProductEditContext.Provider
      value={{
        getProductById,
        loading,
        productData,
      }}
    >
      {children}
    </ProductEditContext.Provider>
  );
};

export const useProductEdit = () => useContext(ProductEditContext);
