export const initialState = {
  data: [],
  cart: [],
  selectedCategory: [],
};

export const actions = {
  ADD_DATA: 'ADD_DATA',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_DATA:
      return {
        ...state,
        data: action.data,
      };
    case actions.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case actions.REMOVE_PRODUCT:
      const filteredCart = state.cart.filter(product => product.id !== action.id);
      return {
        ...state,
        cart: filteredCart,
      };
    case actions.FILTER_BY_CATEGORY:
      const filteredCategory = state.data.filter(product => product.category === action.category);
      return {
        ...state,
        selectedCategory: filteredCategory,
      };
    default:
      return state;
  }
};
