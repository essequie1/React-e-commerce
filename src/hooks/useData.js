// Set the localStorage cart for the initialState.
const getLocalCartData = () => {
  const localCart = localStorage.getItem('sartorialCart');
  if (localCart === null) {
    localStorage.setItem('sartorialCart', JSON.stringify([]));
    return [];
  }
  return JSON.parse(localCart);
};

// Set the localStorage cart total amount for the initialState.
const getLocalCartPrice = () => {
  const localCart = localStorage.getItem('sartorialCart');
  if (localCart === null || localCart == []) {
    return 0;
  } else {
    const cart = JSON.parse(localCart);
    return calculateCartTotal(cart);
  }
};

// Reducer for calculating the cart total amount.
const calculateCartTotal = cart => {
  const cartPrices = cart.reduce((acc, prod) => acc + prod.price * prod.selectedQuantity, 0);
  return cartPrices.toFixed(2);
};

export const initialState = {
  data: [],
  cart: getLocalCartData(),
  selectedCategory: [],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  cartTotal: getLocalCartPrice(),
};

export const actions = {
  ADD_DATA: 'ADD_DATA',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR_CART: 'CLEAR_CART',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY',
  CHANGE_PRODUCT_SIZE: 'CHANGE_PRODUCT_SIZE',
  CHANGE_PRODUCT_QUANTITY: 'CHANGE_PRODUCT_QUANTITY',
};

export const reducer = (state, action) => {
  switch (action.type) {
    // Get data from Firebase and populate the data array for the context.
    // Also turn the "variations" object into an array for simplicity.
    case actions.ADD_DATA:
      return {
        ...state,
        data: action.data,
      };

    // Add a single product to the cart.
    case actions.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.product],
        cartTotal: calculateCartTotal([...state.cart, action.product]),
      };

    // To remove all products from the cart.
    case actions.CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartTotal: 0,
      };

    // Remove a single product from the cart.
    case actions.REMOVE_PRODUCT:
      const filteredCart = state.cart.filter(product => product.id !== action.id);
      return {
        ...state,
        cart: filteredCart,
        cartTotal: calculateCartTotal(filteredCart),
      };

    // Change a single product selected "size" property.
    case actions.CHANGE_PRODUCT_SIZE:
      const newCartForSize = [...state.cart];
      const indexSize = state.cart.findIndex(prod => prod.id === action.id);
      const itemToChangeSize = newCartForSize[indexSize];
      itemToChangeSize.selectedSize = action.size;
      return {
        ...state,
        cart: newCartForSize,
      };

    // Change a single product selected "quantity" property.
    case actions.CHANGE_PRODUCT_QUANTITY:
      const newCartForQuantity = [...state.cart];
      const indexQuantity = state.cart.findIndex(prod => prod.id === action.id);
      const itemToChangeQuantity = newCartForQuantity[indexQuantity];
      itemToChangeQuantity.selectedQuantity = action.quantity;
      return {
        ...state,
        cart: newCartForQuantity,
        cartTotal: calculateCartTotal(newCartForQuantity),
      };

    default:
      return state;
  }
};
