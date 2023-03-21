import '../scss/CartWidget.scss';

const CartWidget = () => {
  return (
    <button className="cart">
      <span className="material-symbols-outlined cart__icon">shopping_cart</span>
      <span className="cart__qty">2</span>
    </button>
  );
};

export default CartWidget;
