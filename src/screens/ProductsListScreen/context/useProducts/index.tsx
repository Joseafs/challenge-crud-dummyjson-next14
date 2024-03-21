import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { deleteProduct, getProducts } from '~/services/products';
import { FetchProductsParams, Product, ProductsData } from '~/services/products/getProducts/types';

import { ProductsContext } from './types';
import { filterProductsBySearch } from './utils/filterProductsBySearch';

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

  const [productsSearch, setProductsSearch] = useState('');
  // TODO: make productsOrderBy works with select
  // const [productsOrderBy, setProductsOrderBy] = useState('');

  const [loading, setLoading] = useState(false);

  const productsList: Product[] = useMemo(() => {
    const { products } = productsData;

    if (!productsSearch) {
      return products;
    }

    const filteredList = filterProductsBySearch(products, productsSearch);

    return filteredList;
  }, [productsData, productsSearch]);

  const getProductsList = useCallback(async (params?: FetchProductsParams) => {
    setLoading(true);

    try {
      const data = await getProducts(params);
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
        productsList,
        productsSearch,
        setProductsSearch,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsListContext);
