import { useRouter } from 'next/navigation';
import { createContext, FC, useCallback, useContext, useMemo, useState } from 'react';

import { addProduct, getProduct, getProductsCategories, saveProduct } from '~/services/products';
import { ProductData } from '~/services/products/getProduct/types';
import { ProductsCategoriesData } from '~/services/products/getProductsCategories/types';

import { ProductContext, ProviderProductProps } from './types';
import { initialProductDataState } from './values';

export const ProductEditContext = createContext({} as ProductContext);

export const ProductEditProvider: FC<ProviderProductProps> = ({ children, createMode = false, id }) => {
  const router = useRouter();

  const [productData, setProductData] = useState<ProductData>(initialProductDataState);
  const [productsCategoriesData, setProductsCategoriesData] = useState<ProductsCategoriesData>([]);

  const [loading, setLoading] = useState(true);

  const fetchProductWithID = useCallback(async () => {
    if (!id) return;

    const [dataProduct, dataProductsCategories] = await Promise.all([getProduct(id), getProductsCategories()]);

    setProductData(dataProduct);
    setProductsCategoriesData(dataProductsCategories);
  }, [id]);

  const getProductData = useCallback(async () => {
    setLoading(true);

    try {
      if (createMode) {
        const data = await getProductsCategories();

        setProductsCategoriesData(data);
      } else {
        fetchProductWithID();
      }
    } catch (e) {
      router.replace('/products/');
    } finally {
      setLoading(false);
    }
  }, [createMode, fetchProductWithID, router]);

  const saveProductWithID = useCallback(
    async (jsonFormat: string) => {
      if (!id) return;
      const data = await saveProduct(id, jsonFormat);

      setProductData(data);
    },
    [id],
  );

  const saveProductById = useCallback(
    async (values: ProductData) => {
      setLoading(true);

      try {
        const { id, ...valuesWithoutId } = values;
        const jsonFormat = JSON.stringify(valuesWithoutId);

        if (createMode) {
          await addProduct(jsonFormat);

          alert('Produto salvo com sucesso, você será redirecionado a listagem');
          router.push('/products/');
          // As we know, the products it's save at dummyjson, so he isn't be show;
          // TODO: call some snackbar on place of alert;
        } else {
          saveProductWithID(jsonFormat);
        }
      } catch (e) {
        alert('Produto não encontrado');
        router.replace('/products/');
      } finally {
        setLoading(false);
      }
    },
    [createMode, router, saveProductWithID],
  );

  const product = useMemo(() => productData, [productData]);
  const productsCategories = useMemo(() => productsCategoriesData, [productsCategoriesData]);

  return (
    <ProductEditContext.Provider
      value={{
        getProductData,
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
