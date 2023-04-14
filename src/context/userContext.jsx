import { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, actions } from '../hooks/useUser';

const userContext = createContext([]);

export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   userData: [],
  //   wishlist: [],

  const value = {
    userData: state.userData,
    wishlist: state.wishlist,
    addUserData: data => {
      dispatch({ type: actions.ADD_USER_DATA, data });
    },
    removeUserData: () => {
      dispatch({ type: actions.REMOVE_USER_DATA });
    },
    addToWishlist: product => {
      dispatch({ type: actions.ADD_TO_WISHLIST, product });
    },
    removeFromWishlist: productId => {
      dispatch({ type: actions.REMOVE_FROM_WISHLIST, productId });
    },
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
