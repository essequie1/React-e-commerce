export function checkCart(cart, productID) {
  const isInside = cart.filter(product => product.id === productID).length > 0;
  return isInside;
}
