export const initialState = {
  userData: {},
  wishlist: [],
};

export const actions = {
  ADD_USER_DATA: 'ADD_USER_DATA',
  REMOVE_USER_DATA: 'REMOVE_USER_DATA',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_USER_DATA:
      const { wishlist, ...userData } = action.data;
      return {
        userData: userData,
        wishlist: wishlist,
      };
    case actions.REMOVE_USER_DATA:
      return {
        userData: {},
        wishlist: [],
      };
    case actions.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.product],
      };
    case actions.REMOVE_FROM_WISHLIST:
      const filtered = state.wishlist.filter(prod => prod.id !== action.productId);
      return {
        ...state,
        wishlist: filtered,
      };
    default:
      return state;
  }
};
