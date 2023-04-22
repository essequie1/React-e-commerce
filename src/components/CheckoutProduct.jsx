import { useProductsContext } from '../context/productsContext';
import '../scss/CheckoutProduct.scss';

export const CheckoutProduct = ({ prod }) => {
  const { changeProductSize, changeProductQuantity, removeFromCart, sizes } = useProductsContext();

  const handleQuantityChange = (e, prodId) => {
    if (e.target.validity.valid) {
      changeProductQuantity(prodId, parseInt(e.target.value));
    }
  };

  return (
    <div className="checkout-product" key={prod.id}>
      <img className="checkout-product__image" src={prod.image} alt="" />
      <h4 className="checkout-product__title">{prod.title}</h4>
      <select className="checkout-product__select" defaultValue={prod.selectedSize} onChange={e => changeProductSize(prod.id, e.target.value)}>
        {prod.selectedSize == '' ? <option value="" disabled hidden selected></option> : prod.selectedSize}
        {sizes.map(size => (
          <option className="checkout-product__option" key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <input
        className="checkout-product__input"
        value={prod.selectedQuantity}
        onChange={e => handleQuantityChange(e, prod.id)}
        type="number"
        required
        pattern="([0-9])+"
        min={1}
        max={5}
      />
      <p className="checkout-product__price">$ {(prod.price * prod.selectedQuantity).toFixed(2)}</p>
      <button className="checkout-product__remove" onClick={() => removeFromCart(prod.id)}>
        <span className="material-symbols-outlined remove-icon">delete</span>
      </button>
    </div>
  );
};
