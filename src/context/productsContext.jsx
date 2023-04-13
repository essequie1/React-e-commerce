import { createContext, useReducer } from 'react';
import { reducer, initialState, actions } from '../hooks/useData';

export const productsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    data: state.data,
    cart: state.cart,
    selectedCategory: state.selectedCategory,
    selectedItem: state.selectedItem,
    addData: data => {
      dispatch({ type: actions.ADD_DATA, data });
    },
    addToCart: product => {
      dispatch({ type: actions.ADD_PRODUCT, product });
    },
    removeFromCart: id => {
      dispatch({ type: actions.REMOVE_PRODUCT, id });
    },
    filterByCategory: category => {
      dispatch({ type: actions.FILTER_BY_CATEGORY, category });
    },
  };

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};
