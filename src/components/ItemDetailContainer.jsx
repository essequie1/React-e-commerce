import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getApiData from '../services/fetchApi';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { pid } = useParams();

  useEffect(() => {
    getApiData().then(data => {
      const filteredProduct = data.filter(product => product.id === parseInt(pid));
      setProduct(filteredProduct[0]);
    });
  }, [pid]);

  return (
    <div className="item-detail-container">
      {product ? (
        <ItemDetail title={product.title} description={product.description} image={product.image} price={product.price} category={product.category} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
