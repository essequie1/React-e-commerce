import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer, initialState, actions } from '../hooks/useData';

const productsContext = createContext([]);

export const useProductsContext = () => useContext(productsContext);

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
    getCartFromStorage: cart => {
      dispatch({ type: actions.GET_CART_FROM_STORAGE, cart });
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

  useEffect(() => {
    if (state.cart == []) {
      localStorage.getItem();
    }
    localStorage.setItem('sartorialCart', JSON.stringify(state.cart));
  }, [state.cart]);

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};
