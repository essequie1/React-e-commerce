import { getOrderByID } from '../services/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { OrderProduct, Loading } from './componentsIndex';
import '../scss/OrderContainer.scss';

export const OrderContainer = () => {
  const [orderProducts, setOrderProducts] = useState({});
  const [ETA, setETA] = useState();
  const { oid } = useParams();

  useEffect(() => {
    getOrderByID(oid).then(({ orderProducts, ETA }) => {
      setOrderProducts(orderProducts);
      setETA(new Date(ETA));
    });
  }, [oid]);

  return (
    <div className="order-container">
      <div className="order">
        <span>
          <strong>ORDER: </strong> {oid}
          <small>
            Save this code to request order information in this <Link to={`/orders/search`}>link</Link>.
          </small>
        </span>
        <span>
          <strong>ARRIVING:</strong>
          <p>{ETA?.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </span>
        <div className="order__products">
          {orderProducts.length > 0 ? orderProducts.map(product => <OrderProduct key={product.id} product={product} />) : <Loading />}
        </div>
        <Link className="order__link" to={'/'}>
          Continue Shopping<span class="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};
