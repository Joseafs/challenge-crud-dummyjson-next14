export { addProduct } from './addProduct';
export { deleteProduct } from './deleteProduct';
export { getProduct } from './getProduct';
export { getProducts } from './getProducts';
export { getProductsCategories } from './getProductsCategories';
export { saveProduct } from './saveProduct';

export const apiRouteProducts = '/products';
export const apiRouteProductsCategories = `${apiRouteProducts}/categories`;

export const apiRouteProductAdd = `${apiRouteProducts}/add`;
