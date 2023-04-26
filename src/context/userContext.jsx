import { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../services/auth';
import { getUserData } from '../services/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { reducer, initialState, actions } from '../hooks/useUser';

const userContext = createContext([]);

export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    userData: state.userData,
    wishlist: state.wishlist,
    isLoggedIn: state.isLoggedIn,
    addUserDataToContext: data => {
      dispatch({ type: actions.ADD_USER_DATA, data });
    },
    removeUserDataFromContext: () => {
      dispatch({ type: actions.REMOVE_USER_DATA });
    },
    addToWishlist: product => {
      dispatch({ type: actions.ADD_TO_WISHLIST, product });
    },
    removeFromWishlist: productId => {
      dispatch({ type: actions.REMOVE_FROM_WISHLIST, productId });
    },
  };

  // Effect to get userData on first render
  useEffect(() => {
    const listener = onAuthStateChanged(auth, user => {
      if (user) {
        getUserData(user.uid).then(data => dispatch({ type: actions.ADD_USER_DATA, data }));
      } else {
      }
    });

    return () => {
      listener();
    };
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
