export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});
