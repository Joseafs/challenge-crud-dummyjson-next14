import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { deleteProduct, getProducts } from '~/services/products';
import { ProductData } from '~/services/products/getProduct/types';
import { FetchProductsParams, ProductsData } from '~/services/products/getProducts/types';

import { ProductsListContextProps, ProductsSortOptionsKeys } from './types';
import { filterProductsBySearch } from './utils/filterProductsBySearch';
import { initialProductsDataState, sortOptionsList } from './values';

export const ProductsListContext = createContext({} as ProductsListContextProps);

export const ProductsListProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [productsData, setProductsData] = useState<ProductsData>(initialProductsDataState);
  const [productsSearch, setProductsSearch] = useState('');
  const [productsSortOption, setSortOption] = useState<ProductsSortOptionsKeys>(sortOptionsList[0].value);

  const [loading, setLoading] = useState(false);

  const productsList: ProductData[] = useMemo(() => {
    const { products } = productsData;

    const filteredList = filterProductsBySearch(products, productsSearch);

    if (productsSortOption === 'title') {
      filteredList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (productsSortOption === 'brand') {
      filteredList.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    return filteredList;
  }, [productsData, productsSearch, productsSortOption]);

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
        productsSortOption,
        setProductsSearch,
        setSortOption,
        totalEnabledProducts,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsListContext);
