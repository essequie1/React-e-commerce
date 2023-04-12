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
    filterByCategory: category => {
      dispatch({ type: actions.FILTER_BY_CATEGORY, category });
    },
    filterById: pid => {
      dispatch({ type: actions.SELECT_ITEM, pid });
    },
    unselectItem: () => {
      dispatch({ type: actions.UNSELECT_ITEM });
    },
    removeFromCart: id => {
      dispatch({ type: actions.REMOVE_PRODUCT, id });
    },
  };

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};
