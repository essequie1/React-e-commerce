import { useProductsContext } from '../context/productsContext';
import '../scss/CartProduct.scss';

export const CartProduct = ({ product }) => {
  const { removeFromCart } = useProductsContext();

  return (
    <div className="cart-product">
      <img src={product.image} alt="" />
      <p className="cart-product__title">{product.title}</p>
      <p className="cart-product__price">$ {product.price.toFixed(2)}</p>
      <button onClick={() => removeFromCart(product.id)} className="cart-product__button">
        <span className="material-symbols-outlined product-icon">delete</span>
      </button>
    </div>
  );
};
