const getLocalCartData = () => {
  let localCart = localStorage.getItem('sartorialCart');
  return JSON.parse(localCart);
};

export const initialState = {
  data: [],
  cart: getLocalCartData(),
  selectedCategory: [],
};

export const actions = {
  ADD_DATA: 'ADD_DATA',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY',
  CHANGE_PRODUCT_SIZE: 'CHANGE_PRODUCT_SIZE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    // Get data from Firebase and populate the cart from the context.
    case actions.ADD_DATA:
      return {
        ...state,
        data: action.data,
      };

    // Add a single product to the cart.
    case actions.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    // Remove a single product from the cart.
    case actions.REMOVE_PRODUCT:
      const filteredCart = state.cart.filter(product => product.id !== action.id);
      return {
        ...state,
        cart: filteredCart,
      };

    // Filter the data from the context by a specified category.
    case actions.FILTER_BY_CATEGORY:
      const filteredCategory = state.data.filter(product => product.category === action.category);
      return {
        ...state,
        selectedCategory: filteredCategory,
      };

    // Change a single product selected "size" property.
    case actions.CHANGE_PRODUCT_SIZE:
      const newCart = [...state.cart];
      const index = state.cart.findIndex(prod => prod.id === action.id);
      const itemToChange = newCart[index];
      itemToChange.selectedSize = action.size;
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};
