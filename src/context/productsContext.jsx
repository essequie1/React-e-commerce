import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer, initialState, actions } from '../hooks/useData';
import { getProducts } from '../services/firestore';

const productsContext = createContext([]);

export const useProductsContext = () => useContext(productsContext);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    data: state.data,
    cart: state.cart,
    selectedCategory: state.selectedCategory,
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
    changeProductSize: (id, size) => {
      dispatch({ type: actions.CHANGE_PRODUCT_SIZE, id, size });
    },
    changeProductQuantity: (id, quantity) => {
      dispatch({ type: actions.CHANGE_PRODUCT_QUANTITY, id, quantity });
    },
  };

  // Effect to get products from Firebase on first render
  useEffect(() => {
    getProducts().then(data => dispatch({ type: actions.ADD_DATA, data }));
  }, []);

  // Effect to save cart to local storage
  useEffect(() => {
    if (state.cart == []) {
      localStorage.getItem();
    }
    localStorage.setItem('sartorialCart', JSON.stringify(state.cart));
  }, [state.cart]);

  return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
};
