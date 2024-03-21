import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { deleteProduct, getProducts } from '~/services/products';
import { FetchProductsParams, Product, ProductsData } from '~/services/products/getProducts/types';

import { ProductsContext, ProductsSortOptionsKeys } from './types';
import { filterProductsBySearch } from './utils/filterProductsBySearch';
import { initialProductsDataState, sortOptionsList } from './values';

export const ProductsListContext = createContext({} as ProductsContext);

export const ProductsListProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [productsData, setProductsData] = useState<ProductsData>(initialProductsDataState);
  const [productsSearch, setProductsSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState<ProductsSortOptionsKeys>(sortOptionsList[0].value);

  const productsList: Product[] = useMemo(() => {
    const { products } = productsData;

    const filteredList = filterProductsBySearch(products, productsSearch);

    if (sortOption === 'title') {
      filteredList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'brand') {
      filteredList.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    return filteredList;
  }, [productsData, productsSearch, sortOption]);

  const totalEnabledProducts = useMemo(() => {
    return productsList.reduce((contador, objeto) => {
      if (objeto.isDeleted !== true) {
        return contador + 1;
      } else {
        return contador;
      }
    }, 0);
  }, [productsList]);

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

        const { products } = productsData;

        const newProcutsList = products.map((product) => {
          if (product.id === id) {
            return data;
          }
          return product;
        });

        const newProductsData: ProductsData = { ...productsData, products: newProcutsList };

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
        setSortOption,
        sortOption,
        totalEnabledProducts,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsListContext);
