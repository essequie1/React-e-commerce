export function checkSelectedSizes(cart) {
  const sizesSelected = cart.every(obj => Object.values(obj).every(value => value !== ''));
  return sizesSelected;
}
