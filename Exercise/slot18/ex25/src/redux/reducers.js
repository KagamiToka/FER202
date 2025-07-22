const initialState = {
  products: [],
  cart: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };

    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};
