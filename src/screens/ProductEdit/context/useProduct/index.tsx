import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { getProductsCategories } from '~/services/products';
import { getProduct } from '~/services/products/getProduct';
import { ProductData } from '~/services/products/getProduct/types';
import { ProductsCategoriesData } from '~/services/products/getProductsCategories/types';
import { saveProduct } from '~/services/products/saveProduct';

import { ProductContext } from './types';
import { initialProductDataState } from './values';

export const ProductEditContext = createContext({} as ProductContext);

export const ProductEditProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [productData, setProductData] = useState<ProductData>(initialProductDataState);
  const [productsCategoriesData, setProductsCategoriesData] = useState<ProductsCategoriesData>([]);

  const [loading, setLoading] = useState(false);

  const getProductById = useCallback(
    async (id: number) => {
      setLoading(true);

      try {
        const [dataProduct, dataProductsCategories] = await Promise.all([getProduct(id), getProductsCategories()]);

        setProductData(dataProduct);
        setProductsCategoriesData(dataProductsCategories);
      } catch (e) {
        alert('Produto não encontrado');
        router.replace('/products');
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  const saveProductById = useCallback(
    async (values: ProductData) => {
      setLoading(true);

      try {
        const { id, ...valuesWithoutId } = values;
        const jsonFormat = JSON.stringify(valuesWithoutId);

        const data = await saveProduct(productData.id, jsonFormat);

        setProductData(data);
      } catch (e) {
        alert('Produto não encontrado');
        router.replace('/products');
      } finally {
        setLoading(false);
      }
    },
    [productData.id, router],
  );

  const product = useMemo(() => productData, [productData]);
  const productsCategories = useMemo(() => productsCategoriesData, [productsCategoriesData]);

  return (
    <ProductEditContext.Provider
      value={{
        getProductById,
        loading,
        product,
        productsCategories,
        saveProductById,
      }}
    >
      {children}
    </ProductEditContext.Provider>
  );
};

export const useProductEdit = () => useContext(ProductEditContext);
