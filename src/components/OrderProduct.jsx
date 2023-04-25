import '../scss/OrderProduct.scss';

export const OrderProduct = ({ product }) => {
  return (
    <div className="orderProduct">
      <img className="orderProduct__image" src={product.image} alt={product.title} />
      <h4 className="orderProduct__title">{product.title}</h4>
      <p className="orderProduct__quantity">x{product.selectedQuantity}</p>
      <p className="orderProduct__price">$ {(product.price * product.selectedQuantity).toFixed(2)}</p>
    </div>
  );
};
