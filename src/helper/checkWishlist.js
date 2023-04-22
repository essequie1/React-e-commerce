export function checkWishlist(wishlist, productID) {
  const isInside = wishlist.filter(product => product.id === productID).length > 0;
  return isInside;
}
