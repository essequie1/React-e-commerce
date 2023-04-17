import { useProductsContext } from '../context/productsContext';
import '../scss/Checkout.scss';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const quantities = [1, 2, 3, 4, 5];

export const Checkout = () => {
  const { cart, changeProductSize } = useProductsContext();
  return (
    <div>
      {cart.map(prod => (
        <div className="checkout-product" key={prod.id}>
          <h4>{prod.title}</h4>
          <select defaultValue={prod.selectedSize} onChange={e => changeProductSize(prod.id, e.target.value)}>
            {prod.selectedSize == '' ? <option value="" disabled hidden selected></option> : prod.selectedSize}
            {sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={() => console.log(cart)}>cart</button>
    </div>
  );
};

// selected={size === prod.selectedSize ? 'selected' : ''}
