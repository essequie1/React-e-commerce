import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../context/productsContext';
import Loading from './Loading';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const { data } = useContext(productsContext);
  const { pid } = useParams();

  useEffect(() => {
    const product = data.filter(prod => prod.id === pid);
    setSelectedItem(product);
  }, [pid, data]);

  return <div className="item-detail-container">{selectedItem.length > 0 ? <ItemDetail product={selectedItem[0]} /> : <Loading />}</div>;
};

export default ItemDetailContainer;
