import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/productsContext';
import { Loading, ItemDetail } from './componentsIndex';

export const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const { data } = useProductsContext();
  const { pid } = useParams();

  useEffect(() => {
    const product = data.filter(prod => prod.id === pid);
    setSelectedItem(product);
  }, [pid, data]);

  return <div className="item-detail-container">{selectedItem.length > 0 ? <ItemDetail product={selectedItem[0]} /> : <Loading />}</div>;
};
