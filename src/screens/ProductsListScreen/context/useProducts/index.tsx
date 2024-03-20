import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { deleteProduct, getProducts } from '~/services/products';
import { ProductsData } from '~/services/products/getProducts/types';

import { ProductsContext } from './types';

const initialProductsDataState = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

export const ProductsListContext = createContext({} as ProductsContext);

export const ProductsListProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [productsData, setProductsData] = useState<ProductsData>(initialProductsDataState);

  const [loading, setLoading] = useState(false);

  const getProductsList = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getProducts({ query: { limit: 5 } });
      setProductsData(data);
    } catch (e) {
      // TODO: will be nice have a toast or context to send errors;
    } finally {
      setLoading(false);
    }
  }, []);

  const onDelete = useCallback(
    async (id: number) => {
      try {
        const data = await deleteProduct(2);

        const { products, total } = productsData;

        const newProductsTotal = total > 0 ? total - 1 : 0;
        const newProcutsList = products.map((product) => {
          if (product.id === id) {
            return data;
          }
          return product;
        });

        const newProductsData: ProductsData = { ...productsData, products: newProcutsList, total: newProductsTotal };

        setProductsData(newProductsData);
      } catch (error) {
        // TODO: will be nice have a toast or context to send errors;
      }
    },
    [productsData],
  );

  const onEdit = useCallback(
    (id: number) => {
      router.push(`/products/edit/${id}`);
    },
    [router],
  );

  return (
    <ProductsListContext.Provider
      value={{
        getProductsList,
        loading,
        onDelete,
        onEdit,
        productsData,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsListContext);
