export const initialState = {
  data: [],
  cart: [],
  selectedCategory: [],
  selectedItem: {},
};

export const actions = {
  ADD_DATA: 'ADD_DATA',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  SELECT_ITEM: 'SELECT_ITEM',
  UNSELECT_ITEM: 'UNSELECT_ITEM',
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
    case actions.SELECT_ITEM:
      return {
        ...state,
        selectedItem: state.data.find(product => product.id === action.pid),
      };
    case actions.UNSELECT_ITEM:
      return {
        ...state,
        selectedItem: {},
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
