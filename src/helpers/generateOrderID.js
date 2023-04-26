export function generateOrderID(cart, ETA) {
  const ID = 'OP-' + Date.parse(ETA) + Date.now() + cart.length.toString().padStart(3, '0');
  return ID;
}
