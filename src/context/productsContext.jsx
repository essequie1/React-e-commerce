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
    sizes: state.sizes,
    cartTotal: state.cartTotal,
    addData: data => {
      dispatch({ type: actions.ADD_DATA, data });
    },
    addToCart: product => {
      dispatch({ type: actions.ADD_PRODUCT, product });
    },
    clearCart: () => {
      dispatch({ type: actions.CLEAR_CART });
    },
    removeFromCart: id => {
      dispatch({ type: actions.REMOVE_PRODUCT, id });
    },
    filterByCategory: category => {
      dispatch({ type: actions.FILTER_BY_CATEGORY, category });
    },
    changeProductSize: (id, size) => {
      dispatch({ type: actions.CHANGE_PRODUCT_SIZE, id, size });
    },
    changeProductQuantity: (id, quantity) => {
      dispatch({ type: actions.CHANGE_PRODUCT_QUANTITY, id, quantity });
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
